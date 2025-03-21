<?php
$host = "localhost";
$db   = "test_db";
$user = "root";
$pass = "password";
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$opt = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];
$pdo = new PDO($dsn, $user, $pass, $opt);

function getUserByUsername($username) {
    $stmt = $pdo->prepare('SELECT * FROM users WHERE username = :username');
    $stmt->execute(['username' => $username]);
    return $stmt->fetch();
}

// Vulnerable code
$username = $_GET['username'];
$user = getUserByUsername($username);
echo json_encode($user);
?>