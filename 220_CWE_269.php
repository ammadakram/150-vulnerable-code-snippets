<?php
class User {
    public $role;

    function __construct($role) {
        $this->role = $role;
    }

    function getRole() {
        return $this->role;
    }
}

class Admin extends User {
    function __construct() {
        parent::__construct('admin');
    }

    function escalatePrivileges() {
        // Privilege escalation vulnerability here
        // An admin user can escalate their privileges to become a superuser
        $superUser = new SuperUser();
        return $superUser;
    }
}

class SuperUser extends User {
    function __construct() {
        parent::__construct('superuser');
    }

    function performAdminAction() {
        // Superuser can perform admin actions
        echo "Performing admin action...\n";
    }
}

// Create a regular user
$user = new User('user');
echo "User role: " . $user->getRole() . "\n";

// Create an admin user
$admin = new Admin();
echo "Admin role: " . $admin->getRole() . "\n";

// Escalate privileges from admin to superuser
$superUser = $admin->escalatePrivileges();
echo "SuperUser role: " . $superUser->getRole() . "\n";

// Perform admin action as superuser
$superUser->performAdminAction();
?>