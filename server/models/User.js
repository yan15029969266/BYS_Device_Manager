const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: { type: String },
    pwd: { type: String },
    avatar: { type: String },
    email: { type: String },
    phone: { type: String },
    group_id:{type:mongoose.Schema.Types.ObjectId,ref:"Group"}
})

module.exports = mongoose.model('User', userSchema)