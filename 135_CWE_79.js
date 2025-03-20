function unsafeFunction(userInput) {
    // This function uses eval() to execute user input as JavaScript code
    var result = eval(userInput);
    return result;
}

// An attacker can exploit this function by passing in a string that contains malicious code
var attackerInput = "alert('You have been hacked');";
var result = unsafeFunction(attackerInput);