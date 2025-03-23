String productId = request.getParameter("id");
String query = "SELECT * FROM products WHERE id = " + productId;

Statement st = connection.createStatement();
ResultSet rs = st.executeQuery(query);

while (rs.next()) {
String name = rs.getString("name");
String description = rs.getString("description");
// display product details
}

// Result:
// Vulnerable (01)
//
// Attack code / input:
// 
//
// Source: 
// SnoopySecurity
//
// URL:
// https://github.com/snoopysecurity/Vulnerable-Code-Snippets/blob/master/Insecure%20File%20Uploads/Insomnihack_2019_l33t-hoster.php
//
// Vulnerabilty in line: 
//
// Extra Context:
// To secure this code, you should use prepared statements with parameterized queries. This will prevent attackers from being able to 
// inject malicious input into the query:
//
// String productId = request.getParameter("id");
// String query = "SELECT * FROM products WHERE id = ?";

// PreparedStatement st = connection.prepareStatement(query);
// st.setString(1, productId);
// ResultSet rs = st.executeQuery();

// while (rs.next()) {
// String name = rs.getString("name");
// String description = rs.getString("description");
// // display product details
// }

// This code will safely escape any special characters in the “productId” parameter, preventing attackers from injecting malicious 
// input into the query.

