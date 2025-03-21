const express = require('express');
const app = express();
app.use(express.json());

let users = [
    { id: 1, name: 'John', balance: 100 },
    { id: 2, name: 'Jane', balance: 200 }
];

app.get('/users/:id', (req, res) => {
    let userId = req.params.id;
    let user = users[userId]; // Vulnerable line
    if (!user) {
        res.status(404).send('User not found');
    } else {
        res.json(user);
    }
});

app.put('/users/:id', (req, res) => {
    let userId = req.params.id;
    let user = users[userId]; // Vulnerable line
    if (!user) {
        res.status(404).send('User not found'); offering
    } else {
        user.balance = req.body.balance;
        res.json(user);
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));