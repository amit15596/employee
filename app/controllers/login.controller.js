import passport from 'passport'
import jwt from 'jsonwebtoken'

async function login(req,res,next) {
    passport.authenticate('login',(err,user,msg)=>{
        console.log(err);
        console.log(msg)
        console.log(user)
        if(err) {
            res.json({ message:err })
        }
        else if(!user) {
            res.json({ message: msg})
        } else {
            console.log(user.first_name);
            const payload = {
                username: user.first_name,
                email:user.email
            } 
            const options = {
                subject: `${user.e_id}`,
                expiresIn: 900
            }
            const token = jwt.sing(payload, 'secret123', options)
            res.json({token})
            res.json({ status: 200, message: "Login Successfully"})
        }
    })(req, res, next)

};

export default {
    login,
}