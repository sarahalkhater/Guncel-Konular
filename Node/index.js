require("dotenv").config()

const {SECRET_PASSWORD} = process.env
//console.log(process.pid)
//console.log(SECRET_PASSWORD)

/*
process.on('exit', (code) => {
    console.log(code)
})
*/

const path = require("path");
 console.log(path.join('first','second'));