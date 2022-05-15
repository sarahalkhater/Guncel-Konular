const os = require("os");

console.log(os.platform());
console.log(os.cpus());
console.log(os.cpus().length);

for (let i = 0; i < os.cpus().length - 2; i++) {

}
