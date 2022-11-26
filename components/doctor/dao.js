const Doctor = require('./model');

exports.createDoctor = async(data,id) => {
    return new Promise(
        (resolve,reject) => Doctor.create({
            usuario:data.usuario,
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
        .populate({path:'usuario',select:'email firstName lastName cellPhone documentNumber rol'})
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
        .populate({path:'usuario',select:'email firstName lastName cellPhone documentNumber rol'})
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
        .populate({path:'usuario',select:'email firstName lastName cellPhone documentNumber rol'})
        .exec((err,doc)=>{
            if(err) return reject(err);
            return resolve(doc);
        })
    );
}