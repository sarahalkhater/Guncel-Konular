const fs = require("fs")
const path = require("path")
/*
fs.readFile(path.resolve(__dirname,"testdata.txt"),(err,data) =>{
    if(err){
        throw(err)
    }
    console.log(data)
})
*/
/*
const stream = fs.createReadStream(path.resolve(__dirname,"testdata.txt"),"utf-8")
stream.on('open', () => console.log("start"))

    stream.on('data',(chunk) => {
        console.log(chunk)
    })
stream.on('end',() => console.log("end"))
*/
/*
const writeStream = fs.createWriteStream(path.resolve(__dirname,"testdata.txt"))
for (let i = 0 ; i < 10 ; i++) {

     writeStream.write (i + '\n');
}
 writeStream.end()
 writeStream.close()
*/
const readStream = fs.createReadStream(path.resolve(__dirname,"testdata.txt"))
const writeStream = fs.createWriteStream(path.resolve(__dirname,"testdata.txt"))
readStream.pipe(writeStream);
