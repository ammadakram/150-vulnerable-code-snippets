<?php
$name = $_GET['name'];
$value = $_GET['value'];

// Insecure usage of extract function
eval("\$data = \$_GET['$name'];");

// Vulnerable code: User-provided data is directly used without any sanitization
echo $data;
?>