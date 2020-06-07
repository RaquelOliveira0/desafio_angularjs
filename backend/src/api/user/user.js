const restful = require('node-restful')
const mongoose = restful.mongoose

const userSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    telefone: { type: String, required: true },
    idade: { type: Number, required: true }
})
module.exports = restful.model('User', userSchema)