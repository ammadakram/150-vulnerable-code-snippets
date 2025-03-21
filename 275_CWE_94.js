function vulnerableFunction(userInput) {
    var result = eval(userInput);
    return result;
}

console.log(vulnerableFunction('2 + 2')); // Expected output: 4
console.log(vulnerableFunction('alert("Hello World")')); // Expected output: alert box with "Hello World"