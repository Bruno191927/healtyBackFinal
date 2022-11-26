const userDao = require('./dao');
const userDto = require('./dto');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

exports.signin = async(request,response) => {


    const userData = request.body; //TODO parametros q yo les estoy enviado del celular

    const userExist = await userDao.findUserByEmail(userData.email); //TODO Trae el usuario si existe ese email
    if(userExist){
        return response.status(400).json({msg:"El email esta en uso"});
    }
    else{

        const document = await userDao.findUserByDocument(userData.documentNumber);// TODO DNI
        if(document){
            return response.status(400).json({msg:"El dni esta en uso"});
        }
        else{
            // el usuario es nuevo
            const newUser = await userDao.createUser(userData); //TODO llamar al dao crate
            if(newUser){
                const newUserData = userDto.user(newUser);
                const jwToken = jwt.sign(
                    {
                        user:{
                            id:newUserData.id,
                            email:newUserData.email
                        }
                    },
                    process.env.SEED,
                    {expiresIn:process.env.EXPIRATION}
                );
                return response.send(userDto.authData(jwToken,process.env.EXPIRATION));
            }
            else{
                response.status(400).json({msg:"Ocurrio un erro al crear el usuario"});
            }
        }
    }
}

exports.login = async(request,response) => {
    const {email,password} = request.body;
    const user = await userDao.findUserByEmail(email);
    if(user){
        const validPassword = bcrypt.compareSync(password,user.password);
        if(validPassword){
            const userData = userDto.user(user);
            const jwToken = jwt.sign(
                {
                    user:{
                        id:userData.id,
                        email:userData.email
                    }
                },
                process.env.SEED,
                {expiresIn:process.env.EXPIRATION}
            );
            response.send(userDto.authData(jwToken,process.env.EXPIRATION,user.rol));
        }
        else{
            response.status(400).json({msg:"Usuario o contraseña incorrecta"});
        }
    }
    else{
        response.status(404).json({msg:"Este correo no esta registrado"});
    }
}

exports.refreshToken = async(request,response) => {
    const jwToken = jwt.sign(
        {
            user:{
                id:user.id,
                email:user.email
            }
        },
        process.env.SEED,
        {expiresIn:process.env.EXPIRATION}
    );

    return response.send(userDto.authData(jwToken,process.env.EXPIRATION));
}