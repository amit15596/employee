import passport from 'passport'
import dbConnection from './db.config'
import passportJWT from 'passport-jwt'

const LocalStrategy = require('passport-local').Strategy
const JWTStrategy   = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt

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

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

