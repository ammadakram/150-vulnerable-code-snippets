app.get('/', function (req,res) {
  res.sendFile(path.join(__dirname+'/login.html'));
});

app.post('/', function (req, res) {
  //User input:
  const username = req.body.username.replace('"', '');
  const password = crypto.createHash('sha1').update(req.body.password).digest('hex');

  if ( username.length > 0 && password.length > 0 ) {
      db.execute(`SELECT * FROM users WHERE (username="${username}") AND (password = "${password}")`)
      .then(([rows, fields]) => {
          if ( rows.length > 0 ) {
              res.send("Logged in!")
              console.log(rows)
          }
      })
      .catch((err) => {   
          console.error('Error executing query:', err);
      });
  }
})

//Start web app:
PORT = 1337
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});

// Result:
// Vulnerable (01)
//
// Attack code / input:
// username: ") OR ("1"="1") --
// password: 1
//
// Source: 
// YesWeHack - Vulnerable code snippets
//
// URL:
// https://github.com/yeswehack/vulnerable-code-snippets/blob/main/SQLi/sqli-login.js/vsnippet/20-sqli-login.js
//
// Vulnerabilty in line: 11