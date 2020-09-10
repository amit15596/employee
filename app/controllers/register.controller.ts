import{Request, Response, NextFunction } from 'express';
import passport from 'passport'

async function register(req:Request,res:Response,next:NextFunction) {
    passport.authenticate('reg',(err,user,msg) => {
        if(err) {
            res.json({ message:err })
        }
        else if(!user) {
            res.json({ message: msg})
        }
        else {
            res.json({ status: 200, message: "Register Successfully",user})
        }
    })(req, res, next)
}

export default {
    register
}