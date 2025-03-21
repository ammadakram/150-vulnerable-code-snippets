<?php
// Include the database connection file
include 'db_connection.php';

// Define the query
$query = "SELECT * FROM users WHERE username='admin'";

// Execute the query
$result = mysqli_query($conn, $query);

// Check if the query was successful
if (!$result) {
    die('Error executing query: ' . mysqli_error($conn));
}

// Fetch the data from the result
while ($row = mysqli_fetch_assoc($result)) {
    echo 'Username: ' . $row['username'] . ', Password: ' . $row['password'];
}

// Close the database connection
mysqli_close($conn);
?>