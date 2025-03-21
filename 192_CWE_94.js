// This is a simple express server
const express = require('express');
const app = express();
app.use(express.json());

app.post('/eval', (req, res) => {
    let code = req.body.code;
    eval(code);  // Vulnerable line
});

app.listen(3000, () => console.log('Server running on port 3000'));