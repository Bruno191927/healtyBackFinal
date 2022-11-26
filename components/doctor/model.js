const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const doctorSchema = new mongoose.Schema({
    usuario:{
        type:Schema.Types.ObjectId,
        ref:'Auth',
        required:true
    },
    categoria:{
        type:String,
        default:''
    },
    descripcion:{
        type:String,
        default:''
    }
},{
    timestamps:true
});


module.exports = mongoose.model('Doctor',doctorSchema);