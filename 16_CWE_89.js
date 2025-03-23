txtUserId = getRequestString("UserId");
txtSQL = "SELECT * FROM Users WHERE UserId = " + txtUserId;

// Result:
// Vulnerable (01)
//
// Attack code / input:
// txtUserId: 105; DROP TABLE Suppliers
//
// Source: 
// w3schools
//
// URL:
// https://www.w3schools.com/sql/sql_injection.asp
//
// Vulnerabilty in line: 02
//
// Extra Context: 
// SQL Injection Based on Batched SQL Statements 
