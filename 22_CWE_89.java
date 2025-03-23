String query = "SELECT account_balance FROM user_data WHERE user_name = "
             + request.getParameter("customerName");
try {
    Statement statement = connection.createStatement( ... );
    ResultSet results = statement.executeQuery( query );
}

// Result:
// Vulnerable (01)
//
// Attack code / input:
// TBD
//
// Source: 
// SQL injection Prevention
//
// URL:
// https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html
//
// Vulnerabilty in line: 05
//
// Extra Context: 
// A common SQL injection flaw in Java is below. Because its unvalidated "customerName" parameter is simply 
// appended to the query, an attacker can enter SQL code into that query and the application would take the 
// attacker's code and execute it on the database.

