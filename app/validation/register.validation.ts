import{Request, Response, NextFunction } from 'express';
const { register } = require('./register.schema')

async function addRegisterValidation(req:Request, res:Response, next:NextFunction) {
    const result = await register.validate(req.body);
    if(result.error){
        res.json({"status": 400,"error":"Error","Message": result.error.details[0].message});
    } else{
        next();
    }
}

export default {
    addRegisterValidation
}


//module.exports = addRegisterValidation;