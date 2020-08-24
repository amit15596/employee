import passport from 'passport'
import '../config/passport'

async function login(req,res) {
        passport.authenticate('local',(err,user)=>{
        if(err){
            res.json({"message":err})
        }
        if(!user){
            res.json({"message":"NO User Exists"})
        }
        res.json({"status":200,"message":"Login Successfully"+ user})
    })

};

export default {
    login
}