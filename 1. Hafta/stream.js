const fs = require("fs");
const path = require("path");

// fs.readFile(path.resolve(__dirname, "testdata.txt"),(err,data) => {
//     if (err) {
//         throw err
//     }
//     console.log(data);
// })

// const stream = fs.createReadStream(path.resolve(__dirname, "testdata.txt"))

// stream.on('open',() => console.log("start"))

// stream.on('data', (chunk) => {
//     console.log(chunk);
// })

// stream.on('end',() => console.log("end"))

const readStream = fs.createReadStream(path.resolve(__dirname, "test_data.txt"))
const writeStream = fs.createWriteStream(path.resolve(__dirname, "test_data_2.txt"))

readStream.pipe(writeStream);

// for (let i = 0; i < 10; i++) {
//     writeStream.write(i + '\n');    
// }

// writeStream.end();
// writeStream.close();
// writeStream.destroy();