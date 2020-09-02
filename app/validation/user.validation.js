const { user } = require('./user.schema')

async function addUserValidation(req, res, next) {
    const result = await user.validate(req.body);
    if(result.error){
        res.json({"status": 400,"error":"Error","Message": result.error.details[0].message});
    } else{
        next();
    }
}

module.exports = addUserValidation;