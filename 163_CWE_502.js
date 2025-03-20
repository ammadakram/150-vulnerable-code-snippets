const express = require('express');
const app = express();
const yaml = require('js-yaml');
const serialize = require('serialize-javascript');

app.use(express.json());

app.post('/deserialize', (req, res) => {
    let userInput = req.body;
    let deserializedData = yaml.load(userInput);
    eval(serialize(deserializedData));
    res.send('Data has been deserialized and executed');
});

app.listen(3000, () => console.log('Server running on port 3000'));