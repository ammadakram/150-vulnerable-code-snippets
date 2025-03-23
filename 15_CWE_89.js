uName = getRequestString("username");
uPass = getRequestString("userpassword");

sql = 'SELECT * FROM Users WHERE Name ="' + uName + '" AND Pass ="' + uPass + '"'

// Result:
// Vulnerable (01)
//
// Attack code / input:
// Name: " or ""="
// Password: " or ""="
//
// Source: 
// w3schools
//
// URL:
// https://www.w3schools.com/sql/sql_injection.asp
//
// Vulnerabilty in line: 04
//
// Extra Context: 
// SQL Injection Based on ""="" is Always True
