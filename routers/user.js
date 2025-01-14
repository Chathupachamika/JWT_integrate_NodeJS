const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const router = express.Router();

router.post('/login', (req, res) => {
    const { username } = req.body;

    if (!username) {
        return res.status(400).send({ error: 'Username is required' });
    }

    const user = { name: username };

    const token = jwt.sign(user, process.env.TOKEN_KEY);
    res.send({ token });
});

module.exports = router;
