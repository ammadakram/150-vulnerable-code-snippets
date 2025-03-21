function createUser(username, password) {
    return "<div>Username: " + username + ", Password: " + password + "</div>";
}

let username = prompt("Enter your username:");
let password = prompt("Enter your password:");

document.body.innerHTML += createUser(username, password);