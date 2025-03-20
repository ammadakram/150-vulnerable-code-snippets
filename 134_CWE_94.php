<?php
$var1 = "Hello";
$var2 = "World";

// User input
$userInput = "var1'; echo 'Injected Code'; \$var2 = 'Overwritten'; //";

// Unsafe usage of extract without the EXTR_PREFIX_SAME flag
extract($userInput);

echo $var1; // Injected Code
echo $var2; // Overwritten
?>