<?php
$host = "localhost";
$db   = "test_db";
$user = "root";
$pass = "password";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM users WHERE username='" . $_GET['username'] . "' AND password='" . $_GET['password'] . "'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "Logged in as: " . $row["username"];
    }
} else {
    echo "Login failed.";
}

$conn->close();
?>
// Improper Neutralization of Special Elements used in an SQL Command (“SQL Injection”)