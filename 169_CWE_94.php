<?php
$user_input = $_GET['user_input'];
extract($user_input);
eval("echo $variable;");
?>