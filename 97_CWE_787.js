const express = require('express');
const app = express();
app.use(express.json());

let users = [
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 2, name: 'Jane', email: 'jane@example.com' }
];

app.get('/users/:id', (req, res) => {
    let user = users.find(u => u.id == req.params.id);
    if (!user) return res.status(404).send('User not found');
    res.send(user);
});

app.put('/users/:id', (req, res) => {
    let user = users.find(u => u.id == req.params.id);
    if (!user) return res.status(404).send('User not found');
    user.name = req.body.name;
    user.email = req.body.email;
    res.send(user);
});

app.listen(3000, () => console.log('Server started on port 3000'));