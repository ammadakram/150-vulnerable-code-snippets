<?php
class User {
    public $username;
    private $password;

    function __construct($username, $password) {
        $this->username = $username;
        $this->password = $password;
    }

    function getPassword() {
        return $this->password;
    }
}

$user = new User('admin', 'password123');

// Vulnerable Code: Direct Object Reference Injection
$serializedUser = serialize($user);
$unserializedUser = unserialize($serializedUser);

echo $unserializedUser->getPassword(); // This will print 'password123'
?>