let userInput = "<script>alert('XSS Attack')</script>";

// Vulnerable Code
let parsedData = JSON.parse(userInput);

document.getElementById("output").innerHTML = parsedData;