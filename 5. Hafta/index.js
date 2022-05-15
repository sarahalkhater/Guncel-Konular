const { MongoClient } = require("mongodb")
const client = new MongoClient('mongodb://localhost:27017/test')

const start = async () => {
    try {
        await client.connect();
        console.log("Database connected...")
        await client.db().createCollection("users");
        const users = client.db().collection('users');
        await users.insertOne({ name: "Sarah", age: 22 })
    }
    catch (error) {
        console.log(error)
    }
}

start()