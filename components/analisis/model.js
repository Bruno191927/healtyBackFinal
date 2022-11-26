const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const analisisSchema = new mongoose.Schema({
    paciente:{
        type:Schema.Types.ObjectId,
        ref:'Auth',
        required:true
    },
    doctor:{
        type:Schema.Types.ObjectId,
        ref:'Doctor',
        required:true
    },
    cita:{
        type:Schema.Types.ObjectId,
        ref:'Citas',
        required:true
    },
    descripcion:{
        type:String,
        default:''
    }
},{
    timestamps:true
});


module.exports = mongoose.model('Analisis',analisisSchema);