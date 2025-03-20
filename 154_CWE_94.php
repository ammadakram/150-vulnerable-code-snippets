<?php
// User input
$_GET['param'] = '; echo "Injected Code";';

// Unsafe usage of extract()
extract($_GET);

// Unsafe usage of eval()
eval("echo $param;");
?>