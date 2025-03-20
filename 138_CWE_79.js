const express = require('express');
const app = express();
app.use(express.urlencoded());

app.post('/comment', function(req, res){
    let comment = req.body.comment;
    res.send('Your comment: ' + comment);
});

app.listen(3000, function(){
    console.log('Server running on port 3000');
});