const Cita = require('./model');

exports.createCita = async(data,id) => {
    return new Promise(
        (resolve,reject) => Cita.create({
            paciente:id,
            doctor:data.doctor,
            day:data.day,
            month:data.month,
            year:data.year,
            hour:data.hour,
            minute:data.minute,
            categoria:data.categoria,
            fechaCompleta:data.fechaCompleta
        },(err,doc)=> {
            if(err) return reject(err);
            return resolve(doc);
        })
    );
}


exports.updateCita = async(data,id) => {
    return new Promise(
        (resolve,reject) => Cita.findByIdAndUpdate(data.id,{
            $set:{
                paciente:id,
                doctor:data.doctor,
                day:data.day,
                month:data.month,
                year:data.year,
                hour:data.hour,
                minute:data.minute,
                categoria:data.categoria,
                fechaCompleta:data.fechaCompleta,
                completada:data.completada
            }
        })
        .exec((err,doc)=> {
            if(err) return reject(err);
            return resolve(doc);
        })
    )
}

exports.findCitaById = async(id) => {
    return new Promise(
        (resolve,reject) => Cita
        .populate({path:'paciente',select:'email firstName lastName cellPhone documentNumber rol'})
        .populate({path:'doctor',select:'usuario categoria descripcion'})
        .populate({path:'doctor.usuario',select:'email firstName lastName cellPhone documentNumber rol'})
        .populate({path:''})
        .exec((err,doc)=> {
            if(err) return reject(err);
            return resolve(doc);
        })
    )
}

exports.findCitaByParameters = async(data,id) => {
    return new Promise(
        (resolve,reject) => Cita
        .find({
            paciente:id,
            day:data.day,
            month:data.month,
            year:data.year,
            hour:data.hour,
            minute:data.minute,
        })
        .exec((err,doc)=> {
            if(err) return reject(err);
            return resolve(doc);
        })
    )
}

exports.findCitas = async(id) => {
    return new Promise(
        (resolve,reject) => Cita
        .find({paciente:id})
        .exec((err,doc)=> {
            if(err) return reject(err);
            return resolve(doc);
        })
    )
}