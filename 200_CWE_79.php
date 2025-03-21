<?php
session_start();

$user = $_POST['username'];
$pass = $_POST['password'];

function authenticate($user, $pass) {
    // Assume this function checks the username and password against a database
    // For simplicity, we'll just return true if the username is 'admin' and password is 'password'
    if ($user == 'admin' && $pass == 'password') {
        return true;
    } else {
        return false;
    }
}

if (authenticate($user, $pass)) {
    $_SESSION['loggedin'] = true;
    $_SESSION['username'] = $user;
    header('Location: dashboard.php');
} else {
    header('Location: login.php');
}