const express = require('express');
const authController = require('./controllers/authController');
const isConnected = require('./middlewares/isConnected');
const router = express.Router();
const jwt = require('jsonwebtoken');





/** Gestion des utilisateurs */



router.post('/login', (req, res) => {
    // Read username and password from request body
    const { email, password } = req.body;
    
    if (email) {
        // Generate an access token
        console.log('generating session')

        //req.session.user = { username, password };

        sess = req.session;
        sess.username = email;
        sess.password = "password"
        res.send(`user ${sess.username} authenticated`);



    } else {
        res.send('Username or password incorrect');
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