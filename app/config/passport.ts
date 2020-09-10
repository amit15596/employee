// import node modules
import passport from 'passport'
import passportStrategy from 'passport-local'
import passportJWT from 'passport-jwt'
import bcrypt from 'bcrypt'
// import local files
import db from '../database/models'

const LocalStrategy = passportStrategy.Strategy
const JWTStrategy   = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt

const options:any = {}
options.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
options.secretOrKey = 'secret';
options.algorithms = 'RS256';

passport.use(
    "reg",
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function(req, email, password, done){
            db.registers.findOne({
                where:{
                    email,
                }
            }).then((user)=>{
                if(user){
                    return done(null, false, {message:"User Already Exists"})
                } else {
                    const regUserData = {
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        email: req.body.email,
                        password: bcrypt.hashSync(req.body.password, 10),
                        phone: req.body.phone,
                    }
                    db.registers.create(regUserData).then(data => {
                        return done(null, false, {status: 200,message:"Register Successfully","response": data})
                    }).catch((error)=>{
                        return done(null, false, {message:error})
                    })
                }
            }).catch(err=>{
                // tslint:disable-next-line:no-console
                console.log(err);
            })
        }
    )
);

passport.use(
    "login",
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function(req, email, password, done) {
            db.users.findOne({
                    where:{
                        email,
                        is_active:'1'
                    }
                }).then((user) =>{
                    if(!user){
                        return done(null, false, {message:"User Not Found"})
                    }
                    if(!bcrypt.compareSync(password,user.password)) {
                        return done(null, false, {message:"Oops! Wrong password."})
                    }
                    return done(null,user);
                }).catch((err) =>{
                    // tslint:disable-next-line:no-console
                    console.log(err);
                })
        }
    )
);

passport.use(
    "jwt",
    new JWTStrategy(options,(jwtpayload,done)=>
        {
            db.users.findOne({
                where:{
                    e_id:jwtpayload.subject
                }
            }).then((user)=>{
                if(!user){
                    return done(null, false, {message:"User Not Found"})
                }
                return done(null,user);
            }).catch((err)=>{
                // tslint:disable-next-line:no-console
                console.log(err);
            })
        }
    )
)
