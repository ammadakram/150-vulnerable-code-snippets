function checkType(val) {
    if (typeof val == null) {
        return "Value is null";
    } else if (typeof val == undefined) {
        return "Value is undefined";
    } else {
        return "Value is defined";
    }
}

console.log(checkType(null)); // Expected Output: Value is undefined
console.log(checkType(undefined)); // Expected Output: Value is undefined
console.log(checkType("Hello")); // Expected Output: Value is defined