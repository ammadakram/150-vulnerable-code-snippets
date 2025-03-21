let userInput = '{"__proto__": {"isAdmin": true}}';
let parsedUserInput = JSON.parse(userInput);

console.log(parsedUserInput.isAdmin); // Expected output: true