<?php
$input = $_GET['user_input'];

// Vulnerable Code: User input is directly evaluated as PHP code
eval("$input");

// Secure Code: User input is properly sanitized and validated
if(preg_match('/^[a-zA-Z0-9]+$/', $input)) {
    eval("$input");
} else {
    echo "Invalid input!";
}
?>