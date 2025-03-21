function processUserInput(userInput) {
    // This function processes user input without proper sanitization
    document.write(userInput);
}

// Usage
var userInput = "<script>alert('This is a XSS attack')</script>";
processUserInput(userInput);