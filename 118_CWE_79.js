function getUserInput() {
    var userInput = document.getElementById('userInput').value;
    return userInput;
}

function displayUserInput() {
    var userInput = getUserInput();
    var divElement = document.getElementById('display');
    divElement.innerHTML = userInput;
}