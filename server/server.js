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
    return jwt.sign({ id }, secret, { expiresIn: maxAge })
}

app.listen(port, () => {
    console.log("Listening on port " + port);
});

// Checks authentication
// TODO: GET - check authentication

// Fetch posts
// TODO: GET - fetch all posts

// Add a post
// TODO: POST - add a post

// Fetch specific post
// TODO: GET - fetch a specific post

// Update a post
// TODO: PUT - update a post

// Delete a post
// TODO: DELETE - delete a post

// Sign up a user
// TODO: POST - sign up user

// Log in user
// TODO: POST - log in user

// Logout user
// TODO: GET - log user out (delete jwt)