const Mongoose = require('mongoose');
const todoSchema = Mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description: String,
    status:{
        type:String,
        enum:['active', 'inactive'],
    },
    date:{
        type:Date,
        dafault:Date.now,

    }
})
module.exports = todoSchema;