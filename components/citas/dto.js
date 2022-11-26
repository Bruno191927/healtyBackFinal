const cita = (data) => ({
    id:data._id,
    paciente:user(data.paciente),
    doctor:doctor(data.doctor),
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
    usuario:user(data.usuario),
    categoria:data.categoria,
    descripcion:data.descripcion
})

const listCita = (resources) =>resources.map((resource)=>cita(resource));

module.exports = {
    cita,
    listCita
}