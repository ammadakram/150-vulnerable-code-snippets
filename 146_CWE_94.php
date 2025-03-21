<?php
class User {
    private $name;
    
    public function __construct($name) {
        $this->name = $name;
    }
    
    public function greet() {
        echo "Hello, " . $this->name;
    }
}

$user = new User("John Doe");
$user->greet();

if (isset($_GET['name'])) {
    $name = $_GET['name'];
    extract($_GET);
    $user->greet();
}
?>