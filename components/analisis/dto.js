
const analisis = (data) => ({
    id:data._id,
    cita:cita(data.cita),
    descripcion:data.descripcion,
    doctor:doctor(data.doctor),
    paciente:user(data.paciente)
})

const cita = (data) => ({
    id:data._id,
    day:data.day,
    month:data.month,
    year:data.year,
    hour:data.hour,
    minutes:data.minutes,
    completada:data.completada,
    categoria:data.categoria,
    fechaCompleta:data.fechaCompleta
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

const doctor = (data) => ({
    id:data._id,
    usuario:user(data.usuario),
    categoria:data.categoria,
    descripcion:data.descripcion
})


const listAnalisis = (resources) =>resources.map((resource)=>analisis(resource));

module.exports = {
    analisis,
    listAnalisis
}