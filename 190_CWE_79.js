function createUser(userName, userData) {
    let userDiv = document.createElement('div');
    userDiv.innerHTML = '<h2>' + userName + '</h2><p>' + userData + '</p>';
    document.body.appendChild(userDiv);
}

let userName = prompt("Enter your username:");
let userData = prompt("Describe yourself:");
createUser(userName, userData);