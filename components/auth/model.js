const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        default:''
    },
    firstName:{
        type:String,
        default:''
    },
    lastName:{
        type:String,
        default:''
    },
    cellPhone:{
        type:String,
        default:''
    },
    documentNumber:{
        type:String,
        default:''
    },
    rol:{
        type:String,
        default:''
    }
},{
    timestamps:true
});


module.exports = mongoose.model('User',userSchema);