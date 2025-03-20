function dangerousFunction(userInput) {
    return eval(userInput);
}

let userInput = "alert('This is a security issue');";
dangerousFunction(userInput);