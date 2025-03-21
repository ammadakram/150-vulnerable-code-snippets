<?php
    class User {
        public $username;
        public $password;
    
        function __construct($user, $pass) {
            $this->username = $user;
            $this->password = $pass;
        }
        
        function login() {
            // Vulnerable code: directly using user input without sanitization
            eval('$this->username = "' . $_GET['new_username'] . '";');
            // Vulnerable code: directly using user input without sanitization
            eval('$this->password = "' . $_GET['new_password'] . '";');
        }
    }

    $user = new User("admin", "password");
    $user->login();
?>