const express = require('express');
const authController = require('./controllers/authController');
const isConnected = require('./middlewares/isConnected');
const router = express.Router();
const jwt = require('jsonwebtoken');
const UserDataSource = require('./dataSource/userDataSource');
const client = require('./dataSource/client');
const { user } = require('./dataSource');
const bcrypt = require('bcrypt');





/** Gestion des utilisateurs */



router.post('/login',async (req, res) => {
    // Read username and password from request body
    const { email, password } = req.body;
    try{

        if (!email)
            throw "email/password was not provided";

        const result = await client.query(
            'SELECT * FROM users WHERE email LIKE $1',
            [email]);

        if (result.rowCount < 1)
            throw "wrong password or email";
        console.log("user found");
        const user = result.rows[0]
        
        if (user.password !== password)
            throw "wrong password or email";
        req.session.user = user;
        console.log(req.session.user)
        res.json(user);

        
        
    } catch(error) {
        res.json({"error": error})
    }
});

router.post("/logout", (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return console.log(err);
        }
        res.send(`user ${sess.username} logged out`);

    });
});



module.exports = router;