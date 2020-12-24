import{Request, Response, NextFunction } from 'express';
import passport from 'passport'
import jwt from 'jsonwebtoken'

async function login(req:Request,res:Response,next:NextFunction) {
    passport.authenticate('login',(err,user,msg)=>{
        if(err) {
            res.json({ message:err })
        }
        else if(!user) {
            res.json({ message: msg})
        }
        else {
            const payload = {
                username: user.firstName,
                email:user.email
            }
            const options = {
                subject: `${user.id}`,
                expiresIn: '1h'
            }
            const token = jwt.sign(payload, 'secret', options)
            res.json({ status: 200, message: "Login Successfully",user,"token":token})
        }
    })(req, res, next)
};

export default {
    login
}