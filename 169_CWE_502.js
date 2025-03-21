const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.get('/login', (req, res) => {
    const user = { id: 1 }; // This should be replaced with actual authentication
    const token = jwt.sign(user, 'mySecretKey'); // Secret key is hardcoded, not secure
    res.json({ token });
});

app.get('/profile', (req, res) => {
    jwt.verify(req.headers['authorization'], 'mySecretKey', (err, data) => { // Secret key is hardcoded, not secure
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({ text: 'Profile Page', data });
        }
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));