const AnalisisDao = require('./dao');
const AnalisisDto = require('./dto');

exports.createAnalisis = async(request,response) => {
    const data = request.body;
    const createAnalisis = await AnalisisDao.createAnalisis(data);
        if(createAnalisis){
            return response.json({
                msg:"Se creo correctamente"
            })
        }
    else{
        return response.status(400).json({msg:"Ocurrio un error"});
    }
}

exports.updateAnalisis = async(request,response) => {
    const data = request.body;
    const id = request.user.id;
    const existAnalisis = await AnalisisDao.findAnalisisById(data.id);
    if(existAnalisis){
        const update = await AnalisisDao.updateAnalisis(data);
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


exports.findAllAnalisis = async(request,response) => {
    const id = request.user.id;
    const analisis = await AnalisisDao.findAllAnalisis(id);
    return response.send(AnalisisDto.listAnalisis(analisis));
}