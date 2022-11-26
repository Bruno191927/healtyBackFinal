const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const citasSchema = new mongoose.Schema({
    paciente:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    doctor:{
        type:Schema.Types.ObjectId,
        ref:'Doctor',
        required:true
    },
    day:{
        type:String,
        default:''
    },
    month:{
        type:String,
        default:''
    },
    year:{
        type:String,
        default:''
    },
    hour:{
        type:String,
        default:''
    },
    minutes:{
        type:String,
        default:''
    },
    completada:{
        type:Boolean,
        default:false
    },
    categoria:{
        type:String,
        default:''
    },
    fechaCompleta:{
        type:String,
        default:''
    }
},{
    timestamps:true
});


module.exports = mongoose.model('Citas',citasSchema);