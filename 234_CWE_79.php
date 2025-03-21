<?php
class User {
    public $username;
    private $password;

    function __construct($usr, $pwd) {
        $this->username = $usr;
        $this->password = $pwd;
    }

    function login($inputUsername, $inputPassword) {
        if ($inputUsername == $this->username && $inputPassword == $this->password) {
            return true;
        } else {
            return false;
        }
    }
}

$user = new User('admin', 'password123');

if ($user->login($_GET['username'], $_GET['password'])) {
    echo "Login successful!";
} else {
    echo "Login failed!";
}
?>