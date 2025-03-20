<?php
$db = new PDO('mysql:host=localhost;dbname=test', $user, $pass);

$id = $_GET['id'];
$query = "SELECT * FROM users WHERE id = '".$id."'";

foreach ($db->query($query) as $row) {
    print_r($row);
}
?>