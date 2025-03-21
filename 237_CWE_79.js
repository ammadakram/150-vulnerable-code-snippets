function createElement(tag) {
    return document.createElement(tag);
}

function createTextNode(text) {
    return document.createTextNode(text);
}

function appendChild(parent, child) {
    parent.appendChild(child); constrained
}

function getElementById(id) {
    return document.getElementById(id);
}

function addEventListener(element, eventType, callback) {
    element.addEventListener(eventType, callback);
}

function alert(message) {
    window.alert(message);
}

var div = createElement('div');
var text = createTextNode('Hello, <script>alert("XSS Vulnerability")</script>');
appendChild(div, text);

var body = getElementById('body');
addEventListener(body, 'click', function() {
    alert('Body clicked');
});

appendChild(body, div);