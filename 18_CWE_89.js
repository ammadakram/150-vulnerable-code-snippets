var express = require("express");

var app = express();
const Sequelize = require("sequelize");
const sequelize = new Sequelize("database", "username", "password", {
  dialect: "sqlite",
  storage: "data/juiceshop.sqlite",
});

app.post("/login", function (req, res) {
  sequelize.query(
    "SELECT * FROM Products WHERE name LIKE " + req.body.username
  );
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
// https://github.com/snoopysecurity/Vulnerable-Code-Snippets/blob/master/SQL%20Injection/sql.js
//
// Vulnerabilty in line: 11
//
// Extra Context: 
// TBD