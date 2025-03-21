function createElement(tagName, attributes, children) {
    let element = document.createElement(tagName);
    for (let attribute in attributes) {
        element.setAttribute(attribute, attributes[attribute]);
    }
    for (let child of children) {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else {
            element.appendChild(child);
        }
    }
    return element;
}

function createApp() {
    let app = createElement('div', {}, [
        createElement('h1', {}, ['Welcome to our site']),
        createElement('p', {}, ['This is a paragraph.'])
    ]);
    document.body.appendChild(app);
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    createApp();
} else {
    document.addEventListener('DOMContentLoaded', createApp);
}