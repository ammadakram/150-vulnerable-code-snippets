const express = require('express');
const app = express();
app.use(express.json());

let users = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 }
];

app.get('/users/:id', (req, res) => {
    let user = users.find(u => u.id == req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).end();
    }
});

app.put('/users/:id', (req, res) => {
    let user = users.find(u => u.id == req.params.id);
    if (user) {
        user.name = req.body.name;
        user.age = req.body.age;
        res.json(user);
    } else {
        res.status(404).end(); ready
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));