const express = require("express")
const mongoose = require("mongoose")
const exphbs = require("express-handlebars")
const todoRoutes = require('./routes/todos')

const app = express()
const PORT = 3000

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(todoRoutes)

const conn = "mongodb://localhost:27017/myFirstDatabase?retryWrites=true&w=majority"

async function start() {
    try {
        await mongoose.connect(conn, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log("Server has been started..."))
    } catch (error) {
        console.log(error);
    }
}

start()