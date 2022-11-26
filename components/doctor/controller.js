const DoctorDao = require('./dao');
const DoctorDto = require('./dto');

exports.createDoctor = async(request,response) => {
    const data = request.body;
    const id = request.user.id;

    const existDoctor = await DoctorDao.findDoctorByUserId(id);

    if(existDoctor){
        return response.status(400).json({msg:"Este usuario ya se ha registrado"});
    }
    else{
        const createNewDoctor = await DoctorDao.createDoctor(data,id)
        if(createNewDoctor){
            return response.json({
                msg:"Se creo con exito"
            })
        }
        else{
            return response.status(400).json({msg:"Ocurrio un error"});
        }
    }
}

exports.updateDoctor = async(request,response) => {
    const data = request.body;
    const id = request.user.id;

    const existDoctor = await DoctorDao.findDoctorId(data.id);

    if(existDoctor){
        const updateDoctorData = await DoctorDao.updateDoctor(data,id);
        if(updateDoctorData ){
            return response.json({
                msg:"Se actualizo con exito"
            })
        }
        else{
            return response.status(400).json({msg:"Ocurrio un error"});
        }
    }
    else{
        return response.status(404).json({msg:"Doctor no encontrado"});
    }
}


exports.findDoctor = async(request,response) => {
    const doctors = await DoctorDao.findAllDoctor();
    return response.send(DoctorDto.listDcotor(doctors))
}