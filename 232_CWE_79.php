<?php
class User {
    private $name;
    private $password;

    public function __construct($name, $password) {
        $this->name = $name;
        $this->password = $password;
    }

    public function getPassword() {
        return $this->password;
    }
}

$user = new User('John Doe', 'secret');

try {
    $password = $user->getPassword();
    echo "User password is: " . $password;
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
?>