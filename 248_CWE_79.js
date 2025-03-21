// This is a simple express server that accepts POST requests 
// at the "/comment" endpoint and stores the comment in memory.

const express = require('express');
const app = express();
app.use(express.json());

let comments = [];

app.post('/comment', (req, res) => {
    let comment = req.body.comment;
    comments.push(comment);
    res.send({ message: 'Comment added successfully' });
});

app.get('/comments', (req, res) => {
    let html = '';
    comments.forEach(comment => {
        html += `<div>${comment}</div>`;
    });
    res.send(html);
});

app.listen(3000, () => console.log('Server running on port 3000'));