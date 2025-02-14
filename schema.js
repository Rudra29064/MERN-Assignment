const mongoose = require('mongoose')

const user = mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    // SecondName : {
    //     type : String
    // },
    email : {
        type : String,
        require : true,
        unique : true
    }, 
    UserName : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
})

const userModel = mongoose.model('users',user)
module.exports = userModel