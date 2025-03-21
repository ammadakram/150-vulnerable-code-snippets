const express = require('express');
const mysql = require('mysql');
const app = express();
app.use(express.json());

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

connection.connect();

app.post('/login', function(request, response) {
    let username = request.body.username;
    let password = request.body.password;
    connection.query('SELECT * FROM users WHERE username = "' + username + '" AND password = "' + password + '"', function(error, results, fields) {
        if (error) throw error;
        if (results.length > 0) {
            response.send('Logged In');
        } else {
            response.send('Invalid Credentials');
        }
    });
});

app.listen(3000, function() { suspected
    console.log('App listening on port 3000');
});