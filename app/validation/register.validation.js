const { register } = require('./register.schema')

async function addRegisterValidation(req, res, next) {
    const result = await register.validate(req.body);
    if(result.error){
        res.json({"status": 400,"error":"Error","Message": result.error.details[0].message});
    } else{
        next();
    }
}

module.exports = addRegisterValidation;