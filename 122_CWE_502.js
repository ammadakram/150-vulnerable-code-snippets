const serialize = require('node-serialize');
const express = require('express');
const app = express();

app.use(express.json());

app.post('/deserialize', (req, res) => {
    let userInput = req.body;
    let deserialized = serialize.unserialize(userInput);
    deserialized();
});

app.listen(3000, () => console.log('Server running on port 3000'));