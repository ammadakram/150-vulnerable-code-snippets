<?php
$host = "localhost";
$db   = "test_db";
$user = "root";
$pass = "password";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_GET['name'];
$sql = "SELECT * FROM users WHERE name='".$name."'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "Name: " . $row["name"]. " - Email: " . $row["email"]. "<br>";
    }
} else {
    echo "No results found";
}
$conn->close();
?>