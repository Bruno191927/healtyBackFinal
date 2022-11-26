const citaDao = require('./dao');
const citaDto = require('./dto');

exports.createCita = async(request,response) => {
    const data = request.body;
    const id = request.user.id;
    const existCita = await citaDao.findCitaByParameters(data,id);
    if(existCita){
        return response.status(400).json({msg:"Esta cita ya existe"});
    }
    else{
        const createCita = await citaDao.createCita(data,id);
        if(createCita){
            return response.json({
                msg:"Se creo correctamente"
            })
        }
        else{
            return response.status(400).json({msg:"Ocurrio un error"});
        }
    }
}

exports.updateCita = async(request,response) => {
    const data = request.body;
    const id = request.user.id;
    const existCita = await citaDao.findCitaById(data.id);
    if(existCita){
        const update = await citaDao.updateCita(data,id);
        if(update){
            return response.json({
                msg:"Se actualizo correctamente"
            })
        }
        else{
            return response.status(400).json({msg:"Ocurrio un error"});
        }
    }
    else{
        return response.status(404).json({msg:"Esta cita no existe"});
    }
}


exports.findAllCita = async(request,response) => {
    const id = request.user.id;
    const citas = await citaDao.findCitas(id);
    return response.send(citaDto.listCita(citas));
}