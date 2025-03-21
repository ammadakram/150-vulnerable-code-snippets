<?php
$con = mysqli_connect("localhost","username","password","database");

if(mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$sql = $_GET['id'];
$result = mysqli_query($con,$sql);

while($row = mysqli_fetch_array($result)) {
    echo $row['Data'] . "<br>";
}

mysqli_close($con);
?>