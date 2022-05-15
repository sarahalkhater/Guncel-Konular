const express = require("express")
const moongose = require("moongose")

app = express()

app.use(express.json())


const start = async () => {
    try {
        await moongose.connect("mongodb://localhost:27017")

    }
}
