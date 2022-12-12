const express = require('express');
const pool = require('./database');
const cors = require('cors');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const port = process.env.PORT || 3000;

const app = express();

app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

const secret = "lahgöelshfpüa94lön42jk1b16ha23212da";
const maxAge = 3600;
const generateJWT = (id) => {
    return jwt.sign({id}, secret, {expiresIn: maxAge});
}

app.listen(port, () => {
    console.log("Listening on port " + port);
});

// Checks authentication
app.get('/auth/authenticate', async (req, res) => {
    console.log('Authentication request received');
    const token = req.cookies.jwt;

    try {
        if (token) {
            await jwt.verify(token, secret, error => {
                if (error) {
                    console.log(error.message);
                    console.log('Token not verified');
                    res.send({"authenticated": false});
                } else {
                    console.log('Token is verified');
                    res.send({"authenticated": true});
                }
            });
        } else {
            console.log('Token not verified');
            res.send({"authenticated": false});
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});

// Fetch posts
app.get('/api/posts', async (req, res) => {
    console.log("Fetch all posts request received");

    try {
        // Gets all posts from posts table
        const posts = await pool.query(
            "SELECT post_id, body, post_date FROM posts"
        );
        res.json(posts.rows);
    } catch (error) {
        console.error(error.message);
    }
});

// Add a post
app.post('/api/posts', async (req, res) => {
    console.log("Add post request received");
    const token = req.cookies.jwt;

    try {
        if (!token) return res.status(401).json({error: "Unauthenticated user"});

        // Gets the id of the user
        const decoded = jwt.verify(token, secret, (error, decoded) => {
            if (error) return res.status(401).json({error: "Unauthenticated user"});
            else return decoded;
        });

        const post = req.body;
        const newpost = await pool.query(
            "INSERT INTO posts(user_id, body, post_date) values ($1, $2, $3)    RETURNING*", [decoded.id, post.body, post.post_date]
        );
        res.json(newpost);
    } catch (error) {
        console.error(error.message);
    }
});

// Fetch specific post
app.get('/api/posts/:id', async (req, res) => {
    console.log("Get a post with route parameter %s request has arrived", req.params.id);

    try {
        const {id} = req.params;
        // Gets the posts with the given id
        const posts = await pool.query(
            "SELECT post_id, body, post_date FROM posts WHERE post_id = $1", [id]
        );
        res.json(posts.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});

// Update a post (only owner can update his own post)
app.put('/api/posts/:id', async (req, res) => {
    console.log("Update request has arrived");
    const token = req.cookies.jwt;

    try {
        if (!token) return res.status(401).json({error: "Unauthenticated user"});

        // Used to get id of current authenticated users
        const decoded = jwt.verify(token, secret, (error, decoded) => {
            if (error) return res.status(401).json({error: "Unauthenticated user"});
            else return decoded;
        });
        const {id} = req.params;
        const newPostBody = req.body.body;

        const post = await pool.query(
            "SELECT * FROM posts WHERE post_id = $1", [id]
        );

        if (post.rows[0].user_id !== decoded.id) return res.status(401).json({error: "You are not the owner of this post"});

        const updatepost = await pool.query(
            "UPDATE posts SET body = $2 WHERE post_id = $1", [id, newPostBody]
        );
        res.json(updatepost);
    } catch (error) {
        console.error(error.message);
    }
});

// Delete a post (only owner can delete his own post)
app.delete('/api/posts/:id', async (req, res) => {
    console.log("Delete a post request has arrived");
    const token = req.cookies.jwt;

    try {
        if (!token) return res.status(401).json({error: "Unauthenticated user"});

        // Used to get id of current authenticated user
        const decoded = jwt.verify(token, secret, (error, decoded) => {
            if (error) return res.status(401).json({error: "Unauthenticated user"});
            else return decoded;
        });
        const {id} = req.params;

        const post = await pool.query(
            "SELECT * FROM posts WHERE post_id = $1", [id]
        );

        if (post.rows[0].user_id !== decoded.id) return res.status(401).json({error: "You are not the owner of this post"});

        const deletepost = await pool.query(
            "DELETE FROM posts WHERE post_id = $1 RETURNING*", [id]
        );
        res.json(deletepost);
    } catch (error) {
        console.error(error.message);
    }
});

// Delete all user posts
app.delete('/api/delete', async (req, res) => {
    console.log("Delete all user posts request has arrived");
    const token = req.cookies.jwt;

    try {
        if (!token) return res.status(401).json({error: "Unauthenticated user"});

        const decoded = jwt.verify(token, secret, (error, decoded) => {
            if (error) return res.status(401).json({error: "Unauthenticated user"});
            else return decoded;
        });

        const deletePosts = await pool.query(
            "DELETE FROM posts WHERE user_id = $1 RETURNING*", [decoded.id]
        );
        res.json(deletePosts);
    } catch (error) {
        console.error(error.message);
    }
});

// Sign up a user
app.post('/auth/signup', async (req, res) => {
    console.log('Signup request received');

    try {
        const {email, password} = req.body;

        // Add salt to the password and hash it
        const salt = await bcrypt.genSalt();
        const bcryptPassword = await bcrypt.hash(password, salt);

        // Insert the new user to the database
        const newUser = await pool.query(
            "INSERT INTO users(email, password) VALUES ($1, $2) RETURNING*", [email, bcryptPassword]
        );

        // Generate auth jwt token and send it
        const token = await generateJWT(newUser.rows[0].id);

        res.status(201)
            .cookie('jwt', token, {maxAge: 6_000_000, httpOnly: true})
            .json({user_id: newUser.rows[0].id})
            .send;
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});

// Log in user
app.post('/auth/login', async (req, res) => {
    try {
        console.log('Login request received');
        const {email, password} = req.body;

        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

        // If no user with this email exists
        if (user.rows.length === 0) return res.status(401).json({error: "User is not registered"});

        // Compares the request and db user passwords
        const ifPasswordIsValid = await bcrypt.compare(password, user.rows[0].password);

        // If password is incorrect
        if (!ifPasswordIsValid) return res.status(401).json({error: "Incorrect password"});

        // Generate auth jwt token and send it
        const token = await generateJWT(user.rows[0].id);

        res.status(201)
            .cookie('jwt', token, {maxAge: 6_000_000, httpOnly: true})
            .json({user_id: user.rows[0].id})
            .send;
    } catch (error) {
        res.status(401).json({error: error.message});
    }
});

// Log user out
app.get('/auth/logout', (req, res) => {
    console.log('Delete jwt request received');
    res.status(202).clearCookie('jwt').json({"Msg": "cookie cleared"}).send
});