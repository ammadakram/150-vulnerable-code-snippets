<?php
$db = new PDO('mysql:host=localhost;dbname=test', 'root', '');

if(isset($_GET['id'])) {
    $id = $_GET['id'];
    $query = "SELECT * FROM users WHERE id = :id";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    $results = $stmt->fetchAll();
    echo json_encode($results);
}
?>