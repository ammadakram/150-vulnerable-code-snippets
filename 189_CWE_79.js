function sanitizeInput(input){
    return input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function processUserInput(userInput){
    let sanitizedInput = sanitizeInput(userInput);
    document.getElementById('output').innerHTML = sanitizedInput;
}

let userInput = "<script>alert('This is a XSS attack')</script>";
processUserInput(userInput);