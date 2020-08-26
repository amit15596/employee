// import node modules
import passport from 'passport'
import passportStrategy from 'passport-local'
import passportJWT from 'passport-jwt'
// import local files
import dbConnection from './db.config'

const LocalStrategy = passportStrategy.Strategy
const JWTStrategy   = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt

var options = {}
options.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
options.secretOrKey = 'secret';

// passport.serializeUser(function(user, done) {
//     done(null, user.e_id);
// });

passport.use(
    "login",
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function(req,email, password, done) {
            dbConnection.query(
                "select * from employee where email = '"+ email +"'",
                (err, rows) => {
                    if(err){
                        return done(err)
                    }
                    if(!rows.length) {
                        return done(null, false, {message:"User Not Found"})
                    }
                    if(!( rows[0].password == password)) {
                        return done(null, false, {message:"Oops! Wrong password."})
                    }
                    return done(null, rows[0]);			
                }
            )
        }
    )
);

passport.use(
    new JWTStrategy(options,(jwtpayload,done)=>
        {
            dbConnection.query(
                "select * from employee where e_id = '"+ jwtpayload.subject +"'",
                (err, result) => {
                    if(err) {
                        return done(err);
                    }
                    if(!rows.length) {
                        return done(null, false, {message:"User Not Found"})
                    }
                    return done(null, rows[0]);
                }
            )   
        }
    )
)
