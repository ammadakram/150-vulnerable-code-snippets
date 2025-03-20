function processData(data) {
    let buffer = new ArrayBuffer(1024);
    let view = new DataView(buffer);
    for (let i = 0; i < data.length; i++) {
        view.setUint8(i, data.charCodeAt(i));
    }
}

let untrustedData = "This is some untrusted data that could potentially overflow the buffer.";
processData(untrustedData);