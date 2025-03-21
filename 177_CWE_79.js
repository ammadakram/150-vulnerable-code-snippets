function createElement(name, attributes, content) {
    var element = document.createElement(name);
    for (var key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    element.textContent = content;
    return element;
}

function processUserInput() {
    var userInput = document.getElementById('userInput').value;
    var sanitizedInput = userInput; // No sanitization here
    var newElement = createElement('p', {}, sanitizedInput);
    document.body.appendChild(newElement);
}

document.getElementById('submitButton').addEventListener('click', processUserInput);