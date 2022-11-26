const Doctor = require('./model');

exports.createDoctor = async(data,id) => {
    return new Promise(
        (resolve,reject) => Doctor.create({
            usuario:data.id,
            descripcion:data.descripcion,
            categoria:data.categoria
        },(err,doc)=> {
            if(err) return reject(err);
            return resolve(doc);
        })
    );
}


exports.updateDoctor = async(data,id) => {
    return new Promise(
        (resolve,reject) => Doctor.findByIdAndUpdate(data.id,{
            $set:{
                usuario:data.id,
                descripcion:data.descripcion,
                categoria:data.categoria
            }
        })
        .exec((err,doc)=>{
            if(err) return reject(err);
            return resolve(doc);
        })
    );
}


exports.findAllDoctor = async() => {
    return new Promise(
        (resolve,reject) => Doctor
        .find()
        .exec((err,doc)=>{
            if(err) return reject(err);
            return resolve(doc);
        })
    );
}

exports.findDoctorByUserId = async(id) => {
    return new Promise(
        (resolve,reject) => Doctor
        .findOne({usuario:id})
        .exec((err,doc)=>{
            if(err) return reject(err);
            return resolve(doc);
        })
    );
}

exports.findDoctorId = async(id) => {
    return new Promise(
        (resolve,reject) => Doctor
        .findById(id)
        .exec((err,doc)=>{
            if(err) return reject(err);
            return resolve(doc);
        })
    );
}