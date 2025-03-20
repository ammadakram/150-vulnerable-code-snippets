<?php
$db = new PDO('mysql:host=localhost;dbname=test', 'root', '');

if(isset($_GET['id'])) {
    $id = $_GET['id'];
    $sql = "SELECT * FROM users WHERE id='$id'";
    $result = $db->query($sql);
    foreach ($result as $row) {
        echo $row['username'] . "<br />";
    }
}
?>