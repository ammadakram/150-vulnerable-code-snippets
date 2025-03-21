// This is a simple Express server

const express = require('express');
const app = express();
app.use(express.json());

app.post('/execute', (req, res) => {
    let code = req.body.code;
    eval(code);
    res.sendStatus(200);
});

app.listen(3000, () => console.log('Server running on port 3000'));