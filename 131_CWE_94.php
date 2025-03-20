<?php
$user_input = $_GET['user_input'];
eval("\$variable = \"$user_input\";");
echo $variable;
?>