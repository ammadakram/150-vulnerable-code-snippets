const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const key = 'Password';
let cipher = crypto.createCipher(algorithm, key);
let decipher = crypto.createDecipher(algorithm, key);

function encrypt(text){
    let encrypted = cipher.update(text,'utf8','hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

function decrypt(encrypted){
    let decrypted = decipher.update(encrypted,'hex','utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

let data = "SensitiveData";
let encryptedData = encrypt(data);
console.log("Encrypted Data: ", encryptedData);
let decryptedData = decrypt(encryptedData);
console.log("Decrypted Data: ", decryptedData);