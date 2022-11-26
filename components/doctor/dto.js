const doctor = (data) => ({
    id:data._id,
    usuario:user(data.usuario),
    categoria:data.categoria,
    descripcion:data.descripcion
});


const user = (data) => ({
    id:data._id,
    email:data.email,
    firstName:data.firstName,
    lastName:data.lastName,
    cellPhone:data.cellPhone,
    documentType:data.documentType,
    documentNumber:data.documentNumber
});


const listDcotor = (resources) =>resources.map((resource)=>doctor(resource));

module.exports = {
    doctor,
    listDcotor
}