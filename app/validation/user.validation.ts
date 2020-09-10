import{Request, Response, NextFunction } from 'express';
const { user } = require('./user.schema')

async function addUserValidation(req:Request, res:Response, next:NextFunction) {
    const result = await user.validate(req.body);
    if(result.error){
        res.json({"status": 400,"error":"Error","Message": result.error.details[0].message});
    } else {
        next();
    }
}

export default {
    addUserValidation
}

//module.exports = addUserValidation;