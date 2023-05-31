const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

    firstName:{
        type:String,
        minLength:1,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        minLength:1,
        required:true,
        trim:true
    },
    username:{
        type:String,
        minLength:6,
        required:true,
        trim:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        validator:{
            validate:function(v){
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v)
            }
        }
    }

},{
    timestamps:true
})


const User = new mongoose.model('User',userSchema)