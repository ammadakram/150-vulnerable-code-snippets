<?php
session_start();
$user = $_SESSION['username'];
$pass = $_SESSION['password'];

if(isset($_POST['login'])){
    $_SESSION['username'] = $_POST['username'];
    $_SESSION['password'] = $_POST['password'];
}

if(isset($_GET['logout'])){
    session_destroy();Bs
}

if(isset($_SESSION['username']) && isset($_SESSION['password'])){
    echo "Welcome " . $_SESSION['username'];
    echo "<a href='?logout'>Logout</a>";
}else{
    echo "<form method='post'>";
    echo "Username: <input type='text' name='username'><br>";
    echo "Password: <input type='password' name='password'><br>";
    echo "<input type='submit' name='login' value='Login'>";
    echo "</form>";
}
?>