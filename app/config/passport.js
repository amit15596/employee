// import node modules
import passport from 'passport'
import passportStrategy from 'passport-local'
import passportJWT from 'passport-jwt'
// import local files
import db from '../database/models'

const LocalStrategy = passportStrategy.Strategy
const JWTStrategy   = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt

var options = {}
options.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
options.secretOrKey = 'secret';
options.algorithms = 'RS256';

passport.use(
    "login",
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function(req, email, password, done) {
            const rows = db.users.findOne({
                    where:{
                        email:email,
                        is_active:'1'
                    }
                }).then((user) =>{
                    if(!user){
                        return done(null, false, {message:"User Not Found"})
                    }
                    if(!user.password == password){
                        return done(null, false, {message:"Oops! Wrong password."})
                    }
                    return done(null,user);
                }).catch((err) =>{
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
                console.log(err);
            })
        }
    )
)
