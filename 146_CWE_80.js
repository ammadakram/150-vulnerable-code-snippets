let user = {
    name: "John Doe",
    role: "admin",
    checkAccess: function() {
        if(this.role === "admin") {
            return true;
        } else {
            return false;
        }
    }
}

let admin = {
    name: "Admin",
    role: 1, // Vulnerability: role is expected to be a string but given as number
    checkAccess: user.checkAccess
}

console.log(admin.checkAccess()); // Expected output: false, Actual output: true