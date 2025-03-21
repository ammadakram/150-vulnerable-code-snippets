<?php
class MyClass {
    private $variable;

    public function __construct($input) {
        $this->variable = $input;
    }

    public function getVariable() {
        return $this->variable;
    }
}

$userInput = ['variable' => 'system("rm -rf /");'];

extract($userInput);

$obj = new MyClass($variable);

echo $obj->getVariable();

// This will execute the command "rm -rf /" due to the vulnerability in extract function.
?>