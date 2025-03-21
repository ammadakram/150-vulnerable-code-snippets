<?php
$username = $_GET['username'];
$password = $_GET['password'];

$conn = new mysqli("localhost", "root", "", "myDB");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM Users WHERE username='$username' AND password='$password'";
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