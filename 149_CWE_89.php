<?php
$db = new PDO('mysql:host=localhost;dbname=test', $user, $pass);

$id = $_GET['id'];
$query = "SELECT * FROM users WHERE id = :id";
$stmt = $db->prepare($query);
$stmt->bindParam(':id', $id, PDO::PARAM_INT);
$stmt->execute();

while ($row = $stmt->fetch()) {
    echo "<div>" . $row['username'] . "</div>";
}
?>