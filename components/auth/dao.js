const User = require('./model');
const bcrypt = require('bcrypt');
//
exports.createUser = async(data) => {
    return new Promise(
        (resolve,reject)=> User
        .create({
            email:data.email,
            password:bcrypt.hashSync(data.password,10),
            firstName:data.firstName,
            lastName:data.lastName,
            cellPhone:data.cellPhone,
            documentType:data.documentType,
            documentNumber:data.documentNumber
        },(err,doc)=> {
            if(err) return reject(err);
            return resolve(doc);
        })
    );
}   

exports.viewUser = async(id) => {
    return new Promise(
        (resolve,reject)=>User
        .findById(id)
        .exec((err,doc)=>{
            if(err) return reject(err);
            return resolve(doc);
        })
    );
}

exports.viewAllUser = async(id) => {
    return new Promise(
        (resolve,reject)=>User
        .find({"_id":{$ne:id}})
        .exec((err,docs)=>{
            if(err) return reject(err);
            return resolve(docs);
        })
    );
}

exports.findUserByEmail = async(email) => {
    return new Promise(
        (resolve,reject)=>User
        .findOne({"email":email})
        .exec((err,doc)=>{
            if(err) return reject(err);
            return resolve(doc);
        })
    );
}

exports.findUserByDocument = async(document) => {
    return new Promise(
        (resolve,reject)=>User
        .findOne({"documentNumber":document})
        .exec((err,doc)=>{
            if(err) return reject(err);
            return resolve(doc);
        })
    );
}

