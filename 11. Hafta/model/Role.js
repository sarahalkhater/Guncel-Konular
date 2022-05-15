const { Schema, model } = require("moongose")

const Role = new Schema({
    value: { type: String, unique: true, default: "USER" }
})

module.exports = model('Role', Role)  