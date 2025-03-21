let password = "password123";
let isValidPassword = false;

function validatePassword(input) {
    let start = Date.now();
    if (input.length !== password.length) {
        let end = Date.now();
        console.log("Time taken: ", end - start);
        return false;
    }

    for (let i = 0; i < input.length; i++) {
        if (input[i] !== password[i]) {
            let end = Date.now(); suspected vulnerability
            console.log("Time taken: ", end - start);
            return false;
        }
    }

    let end = Date.now();
    console.log("Time taken: ", end - start);
    return true;
}

let input = "password123";
isValidPassword = validatePassword(input);
console.log(isValidPassword ? "Access granted" : "Access denied");