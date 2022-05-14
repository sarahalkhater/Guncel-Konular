
const fs = require("fs")
const { resolve } = require("path")
const path = require("path")


//fs.mkdirSync(path.resolve(__dirname ,"dir")) 

/*
fs.rmdir(path.resolve(__dirname ,"dir"),(err) => {
    if(err){
        console.log(err)
    }
})
*/

//asenkron yazar (0213)

/*
fs.writeFile(path.resolve(__dirname,"dir.txt"), "0",(err) =>{
    if(err){
        console.log(err)
    }
})

fs.appendFile(path.resolve(__dirname,"dir.txt"), "1", (err) => {
    if(err){
        console.log(err)
    }
})
fs.appendFile(path.resolve(__dirname,"dir.txt"), "2", (err) => {
    if(err){
        console.log(err)
    }
})
fs.appendFile(path.resolve(__dirname,"dir.txt"), "3", (err) => {
    if(err){
        console.log(err)
    }
})
*/

//callback HELL (0123)
/*
fs.writeFile(path.resolve(__dirname,"dir.txt"), "0",(err) =>{
    if(err){
        console.log(err)
    }
    fs.appendFile(path.resolve(__dirname,"dir.txt"), "1", (err) => {
        if(err){
            console.log(err)
        }
        fs.appendFile(path.resolve(__dirname,"dir.txt"), "2", (err) => {
            if(err){
                console.log(err)
            }
            fs.appendFile(path.resolve(__dirname,"dir.txt"), "3", (err) => {
                if(err){
                    console.log(err)
                }
            })
        })
        
    })
  
})
*/

//Promise


const writeFileAsync = async (path,data) => {
    return new Promise((resolve ,reject) => fs.writeFile(path,data,(err) =>{
        if(err){
            return reject(err.message)
        }
        resolve()
    }))
}
const appendFileAsync = async (path,data) => {
    return new Promise((resolve ,reject) => fs.appendFile(path,data,(err) =>{
        if(err){
            return reject(err.message)
        }
        resolve()
    }))
}

writeFileAsync(path.resolve(__dirname,"dir.txt"),"merhaba")
  .then(() => appendFileAsync(path.resolve(__dirname,"dir.txt"),"asdad"))
  .catch(err => console.log(err))


/*
---------------------------------------------------------------------------------------------------
const writeFileAsync = async (path,data) => {
    return new Promise((resolve ,reject) => fs.writeFile(path,data,(err) =>{
        if(err){
            return reject(err.message)
        }
        resolve()
    }))
} 

const text = 'BIL 4 2 5'

const readFileAsync = async (path) => {
    return new Promise((resolve,reject) => fs.readFile(path, {encoding:'utf-8' }, (err,data) => {
        if(err){
            return reject(err.message)
        }
        resolve(data)
    }))
}
writeFileAsync(path.resolve(__dirname,"text.txt"),text)
.then(() => readFileAsync(path.resolve(__dirname,"text.txt")))
.then(data => data.split(' ').length)
.then(count => writeFileAsync(path.resolve(__dirname,"count.txt"),`file count ${count}`))
----------------------------------------------------------------------------------------------------
*/
/*
const fsPromise = require('fs').promises

const fileRead = async () => {
    try{
        await fsPromise.writeFile(path.resolve(__dirname, "text.txt"))
    } catch(error){

    }  
}
*/

