var users = {
    1: {name: 'John', age: 30},
    2: {name: 'Jane', age: 25}
};

function getUser(id) {
    return users[id];
}

function updateUser(id, newData) {
    users[id] = newData;
}

// Example usage
console.log(getUser(1)); // Outputs: {name: 'John', age: 30}
updateUser(1, {name: 'New John', age: 40});
console.log(getUser(1)); // Outputs: {name: 'New John', age: 40}