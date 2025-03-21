const express = require('express');
const app = express();
app.use(express.json());

let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
];

app.get('/users/:id', (req, res) => {
    // IDOR vulnerability here, user can access other user's data by changing the id in the URL
    let user = users[req.params.id];
    if (!user) {
        res.status(404).send('User not found');
    } else {
        res.send(user);
    }
});

app.put('/users/:id', (req, res) => {
    // IDOR vulnerability here, user can modify other user's data by changing the id in the URL
    let user = users[req.params.id];
    if (!user) {
        res.status(404).send('User not found');
    } else {
        user.name = req.body.name;
        user.email = req.body.email;
        res.send(user);
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));