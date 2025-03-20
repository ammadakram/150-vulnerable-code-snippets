function dangerousFunction(userInput) {
    eval(userInput);
}

var userInput = "alert('This is an attacker-controlled input');";
dangerousFunction(userInput);