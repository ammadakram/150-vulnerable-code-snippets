<?php
$host = "localhost";
$db   = "test";
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

if (isset($_POST['username']) && isset($_POST['password'])) {
    $stmt = $pdo->prepare('SELECT * FROM users WHERE username = :username AND password = :password');
    $stmt->execute(['username' => $_POST['username'], 'password' => $_POST['password']]);
    $user = $stmt->fetch();
    if ($user) {
        echo "Welcome, " . $user['username'];
    } else {
        echo "Invalid username or password.";
    }
}
?>