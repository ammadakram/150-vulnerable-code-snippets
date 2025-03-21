const express = require('express');
const app = express();
app.use(express.json());

let users = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Doe', age: 25 }
];

app.get('/users/:id', (req, res) => {
    let user = users[req.params.id]; // IDOR vulnerability here
    if (!user) {
        return res.status(404).send('User not found');
    }
    res.send(user);
});

app.put('/users/:id', (req, res) => {
    let user = users[req.params.id]; // IDOR vulnerability here
    if (!user) {
        return res.status(404).send('User not found');
    }
    user.name = req.body.name; // Possible unintended modification
    user.age = req.body.age; // Possible unintended modification
    res.send(user);
});

app.listen(3000, () => console.log('Server running on port 3000'));