// This is a simplified version of a timing attack vulnerability
let secretKey = "mySecretKey";

function checkKey(key) {
    let startTime = Date.now();
    if (key === secretKey) {
        let endTime = Date.now();
        console.log("Time taken: ", endTime - startTime);
        return true;
    }
    return false;
}

// Attacker's code trying to guess the secret key
function attack() {
    let possibleKeys = ["key1", "key2", "key3", "mySecretKey"];
    for (let i = 0; i < possibleKeys.length; i++) {
        if (checkKey(possibleKeys[i])) {
            console.log("Found key: ", possibleKeys[i]);
            break; suspectedKey = possibleKeys[i];
        }
    }
}

attack();