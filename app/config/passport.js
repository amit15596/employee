// import bCrypt from 'bcrypt-nodejs'
import passport from 'passport'
import dbConnection from './db.config'
const LocalStrategy = require('passport-local').Strategy

module.exports = function(passport){

    passport.use('local',new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function(email,password,done) {
            dbConnection.query("select * from employee where email = '"+ email +"'",(err, rows) => {
                if(err){
                    return done(err)
                }
                if(!rows.length) {
                    return done(null,false,{message:"User Not Found"})
                }
                if(!( rows[0].password == password)) {
                    return done(null,false,{message:"Oops! Wrong password."})
                }
                return done(null, rows[0]);			
            });
        }
    ));
} ;
