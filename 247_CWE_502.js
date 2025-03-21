const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.get('/login', (req, res) => {
    const user = { id: 1 } // This should be authenticated in real world application

    const token = jwt.sign(user, 'mySecretKey');
    res.json({
        token: token
    });
});

app.get('/profile', (req, res) => {
    jwt.verify(req.headers['authorization'], 'mySecretKey', (err, data) => {
        if(err) {
            res.sendStatus(403);
        } else {
            res.json({
                text: 'Profile page',
                data: data
            });
        }
    });
});

app.listen(3000, () => console.log('Server listening on port 3000'));