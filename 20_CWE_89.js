var mysql = require("db-mysql");
var http = require("http");
var out;
var valTom;
var req = http.request(options, function (res) {
  res.on("data", function (chunk) {
    valTom = chunk;
  });
});
new mysql.Database({
  hostname: "localhost",
  user: "user",
  password: "password",
  database: "test",
}).connect(function (error) {
  var the_Query =
    "INSERT INTO Customers (CustomerName, ContactName) VALUES ('Tom'," +
    valTom +
    ")";
  this.query(the_Query).execute(function (error, result) {
    if (error) {
      console.log("Error: " + error);
    } else {
      console.log("GENERATED id: " + result.id);
    }
  });
  out = resIn;
});

// Result:
// Vulnerable (01)
//
// Attack code / input:
// TBD
//
// Source: 
// SnoopySecurity
//
// URL:
// https://github.com/snoopysecurity/Vulnerable-Code-Snippets/blob/master/SQL%20Injection/example2.js
//
// Vulnerabilty in line: 20
//
// Extra Context: 
// TBD