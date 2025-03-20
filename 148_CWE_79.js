function createElement(tagName, html) {
    var element = document.createElement(tagName);
    element.innerHTML = html;
    return element;
}

function appendToBody(element) {
    document.body.appendChild(element);
}

var userInput = "<script>alert('Hello, world')</script>";
var element = createElement("div", userInput);
appendToBody(element);