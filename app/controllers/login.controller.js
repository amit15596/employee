import passport from 'passport'
import jwt from 'jsonwebtoken'

async function login(req,res,next) {
    passport.authenticate('login',(err,user,msg)=>{
        if(err) {
            res.json({ message:err })
        }
        else if(!user) {
            res.json({ message: msg})
        } 
        else {
            const payload = {
                username: user.first_name,
                email:user.email
            } 
            const options = {
                subject: `${user.e_id}`,
                expiresIn: '8h'
            }
            const token = jwt.sign(payload, 'secret123', options)
            res.json({token})
            res.json({ status: 200, message: "Login Successfully",user,token:"token"})
        }
    })(req, res, next)
};

export default {
    login,
}