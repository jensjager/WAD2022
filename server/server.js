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
        if (token) { // If token exists
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
    try {
        console.log("Fetch all posts request received");
        const posts = await pool.query(
            "SELECT body, post_date FROM posts"
        );
        res.json(posts.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// Add a post
app.post('/api/posts', async(req, res) => {
    try {
        console.log("Add post request received");
        const post = req.body;
        const newpost = await pool.query(
            "INSERT INTO posts(user_id, body, post_date) values ($1, $2, $3)    RETURNING*", [post.user_id, post.body, post.post_date]
        );
        res.json(newpost);
    } catch (err) {
        console.error(err.message);
    }
});

// Fetch specific post
// TODO: GET - fetch a specific post

// Update a post (only owner can update his own post)
// TODO: PUT - update a post

// Delete a post (only owner can delete his own post)
// TODO: DELETE - delete a post

// Sign up a user
app.post('/auth/signup', async (req, res) => {
    try {
        console.log('Signup request received');
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

        // Queries the user
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