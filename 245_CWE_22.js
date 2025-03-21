const express = require('express');
const app = express();
app.use(express.json());

let users = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 }
];

app.get('/users/:id', (req, res) => {
    let user = users[req.params.id]; // IDOR vulnerability here
    if (!user) {
        res.status(404).send('User not found');
    } else {
        res.json(user);
    }
});

app.put('/users/:id', (req, res) => {
    let user = users[req.params.id]; // IDOR vulnerability here
    if (!user) {
        res.status(404).send('User not found');arrant
    } else {
        user.name = req.body.name;
        user.age = req.body.age;
        res.json(user);
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));