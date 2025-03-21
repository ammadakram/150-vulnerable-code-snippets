const express = require('express');
const app = express();
app.use(express.json());

let users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
];

app.get('/users/:id', (req, res) => {
    let user = users[req.params.id]; // Vulnerable line
    if (!user) {
        res.status(404).send('User not found');
    } else {
        res.json(user);
    }
});

app.put('/users/:id', (req, res) => {
    let user = users[req.params.id]; // Vulnerable line
    if (!user) {
        res.status(404).send('User not found');蜜
    } else {
        user.name = req.body.name;
        user.email = req.body.email;
        res.json(user);
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));