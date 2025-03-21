const express = require('express');
const app = express();
app.use(express.json());

let users = [
    { id: 1, name: 'User1', email: 'user1@example.com' },
    { id: 2, name: 'User2', email: 'user2@example.com' }
];

app.get('/users/:id', (req, res) => {
    let user = users[req.params.id]; // <-- Insecure Direct Object Reference (IDOR)
    if (!user) {
        return res.status(404).send('User not found');
    }
    res.send(user);
});

app.put('/users/:id', (req, res) => {
    let user = users[req.params.id]; // <-- Insecure Direct Object Reference (IDOR)
    if (!user) {
        return res.status(404).send('User not found');
    }
    user.name = req.body.name;
    user.email = req.body.email;
    res.send(user);
});

app.listen(3000, () => console.log('Server running on port 3000'));