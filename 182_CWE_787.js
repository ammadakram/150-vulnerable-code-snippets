function processData(data) {
    let buffer = new ArrayBuffer(1024);
    let view = new DataView(buffer);
    for (let i = 0; i < data.length; i++) {
        view.setUint8(i, data.charCodeAt(i));
    }
}

let data = "a".repeat(1025); // This will cause a buffer overflow
processData(data);