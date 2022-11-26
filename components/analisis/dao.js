const Analisis = require('./model');

exports.createAnalisis = async(data) => {
    return new Promise(
        (resolve,reject) => Analisis.create({
            paciente:data.paciente,
            doctor:data.doctor,
            cita:data.cita,
            descripcion:data.descripcion
        },(err,doc)=> {
            if(err) return reject(err);
            return resolve(doc);
        })
    );
}


exports.updateAnalisis = async(data) => {
    return new Promise(
        (resolve,reject) => Analisis.findByIdAndUpdate(data.id,{
            $set:{
                paciente:data.paciente,
                doctor:data.doctor,
                cita:data.cita,
                descripcion:data.descripcion
            }
        })
        .exec((err,doc)=> {
            if(err) return reject(err);
            return resolve(doc);
        })
    )
}

exports.findAllAnalisis = async(id) => {
    return new Promise(
        (resolve,reject) => Analisis
        .find({paciente:id})
        .populate({path:'usuario',select:'email firstName lastName cellPhone documentNumber rol'})
        .populate({path:'doctor',select:'usuario categoria descripcion'})
        .populate({path:'doctor.usuario',select:'email firstName lastName cellPhone documentNumber rol'})
        .populate({path:'cita',select:'day month year hour minutes completada categoria fechaCompleta'})
        .exec((err,doc)=> {
            if(err) return reject(err);
            return resolve(doc);
        })
    )
}


exports.findAnalisisById = async(id) => {
    return new Promise(
        (resolve,reject) => Analisis
        .findById(id)
        .exec((err,doc)=> {
            if(err) return reject(err);
            return resolve(doc);
        })
    )
}