<?php
$host = "localhost";
$db   = "test_db";
$user = "root";
$pass = "password";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$username = $_GET['username'];
$password = $_GET['password'];

$sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "Logged in as: " . $row["username"]. "<br>";
    }
} else {
    echo "Invalid username or password.";
}

$conn->close();
?>