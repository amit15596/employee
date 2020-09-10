"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import node modules
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = __importDefault(require("passport-local"));
const passport_jwt_1 = __importDefault(require("passport-jwt"));
const bcrypt_1 = __importDefault(require("bcrypt"));
// import local files
const models_1 = __importDefault(require("../database/models"));
const LocalStrategy = passport_local_1.default.Strategy;
const JWTStrategy = passport_jwt_1.default.Strategy;
const ExtractJWT = passport_jwt_1.default.ExtractJwt;
const options = {};
options.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
options.secretOrKey = 'secret';
options.algorithms = 'RS256';
passport_1.default.use("reg", new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function (req, email, password, done) {
    models_1.default.registers.findOne({
        where: {
            email,
        }
    }).then((user) => {
        if (user) {
            return done(null, false, { message: "User Already Exists" });
        }
        else {
            const regUserData = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: bcrypt_1.default.hashSync(req.body.password, 10),
                phone: req.body.phone,
            };
            models_1.default.registers.create(regUserData).then(data => {
                return done(null, false, { status: 200, message: "Register Successfully", "response": data });
            }).catch((error) => {
                return done(null, false, { message: error });
            });
        }
    }).catch(err => {
        // tslint:disable-next-line:no-console
        console.log(err);
    });
}));
passport_1.default.use("login", new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function (req, email, password, done) {
    models_1.default.users.findOne({
        where: {
            email,
            is_active: '1'
        }
    }).then((user) => {
        if (!user) {
            return done(null, false, { message: "User Not Found" });
        }
        if (!bcrypt_1.default.compareSync(password, user.password)) {
            return done(null, false, { message: "Oops! Wrong password." });
        }
        return done(null, user);
    }).catch((err) => {
        // tslint:disable-next-line:no-console
        console.log(err);
    });
}));
passport_1.default.use("jwt", new JWTStrategy(options, (jwtpayload, done) => {
    models_1.default.users.findOne({
        where: {
            e_id: jwtpayload.subject
        }
    }).then((user) => {
        if (!user) {
            return done(null, false, { message: "User Not Found" });
        }
        return done(null, user);
    }).catch((err) => {
        // tslint:disable-next-line:no-console
        console.log(err);
    });
}));
//# sourceMappingURL=passport.js.map