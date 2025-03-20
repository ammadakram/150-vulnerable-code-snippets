<?php
session_start();

if(isset($_POST['username'])) {
    $_SESSION['username'] = $_POST['username'];
}

if(isset($_SESSION['username'])) {
    echo "Welcome, " . $_SESSION['username'];
}
?>

<form method="post" action="">
    <input type="text" name="username" placeholder="Enter your username">
    <input type="submit" value="Submit">
</form>