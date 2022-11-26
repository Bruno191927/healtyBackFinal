const user = (data) => ({
    id:data._id,
    email:data.email,
    firstName:data.firstName,
    lastName:data.lastName,
    cellPhone:data.cellPhone,
    documentType:data.documentType,
    documentNumber:data.documentNumber
});


// TODO La respuesta q yo envio al servidor cuando me logeo o registro
const authData = (token,expiresIn) => ({
    token:token,
    expiresIn:expiresIn,
});

const userList = (resources) =>resources.map((resource)=>user(resource)); // TODO lista de usuario dto

module.exports = {
    user,
    userList,
    authData
}