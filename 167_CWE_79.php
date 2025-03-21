<?php
session_start();

class User {
    public $username;
    public $password;

    function __construct($username, $password) {
        $this->username = $username;
        $this->password = $password;
    }
}

function login($user) {
    $_SESSION['loggedin'] = true;
    $_SESSION['username'] = $user->username;
}

function logout() {
    $_SESSION['loggedin'] = false;
    unset($_SESSION['username']);
}

function isLoggedIn() {
    if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
        return true;
    }
    return false;
}

// Vulnerable code: Session fixation
if (!isLoggedIn()) {
    $user = new User('admin', 'password');
    login($user);
}

// Attacker can hijack the session
if (isset($_GET['hijack'])) {
    $_SESSION['loggedin'] = true;
    $_SESSION['username'] = $_GET['hijack'];
}

if (isLoggedIn()) {
    echo "Welcome, " . $_SESSION['username'];
} else {
    echo "Not logged in";
}
?>