<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT username, password FROM Users WHERE username='" . $_GET['username'] . "' AND password='" . $_GET['password'] . "'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "Username: " . $row["username"]. " - Password: " . $row["password"]. "<br>";
  }
} else {
  echo "0 results";
}
$conn->close();
?>