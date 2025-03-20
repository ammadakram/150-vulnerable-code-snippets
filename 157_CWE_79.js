function generateRandomNumber() {
    var currentTime = new Date().getTime();
    var randomNumber = Math.floor(Math.random() * currentTime);
    return randomNumber;
}

console.log(generateRandomNumber());