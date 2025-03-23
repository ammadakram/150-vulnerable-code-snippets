const express = require('express')
const router = express.Router()

router.get('/greeting', (req, res) => {
    const { name }  = req.query;
    res.send('<h1> Hello :'+ name +"</h1>")
})

router.get('/greet-template', (req,res) => {
    name = req.query.name
    res.render('index', { user_name: name});
})

module.exports = router

// Result:
// Vulnerable (01)
//
// Attack code / input:
//
// Source: 
// SnoopySecurity
//
// URL:
// https://github.com/snoopysecurity/Vulnerable-Code-Snippets/blob/master/XSS/express.js
//
// Vulnerabilty in line: 