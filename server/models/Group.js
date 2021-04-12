const mongoose = require('mongoose')
const groupSchema = new mongoose.Schema({
    groupname: { type: String },
    desc:{ type: String }
})

module.exports = mongoose.model('Group', groupSchema)