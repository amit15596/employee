"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
// local imports
const register_routes_1 = __importDefault(require("./app/routes/register.routes"));
const user_routes_1 = __importDefault(require("./app/routes/user.routes"));
const login_routes_1 = __importDefault(require("./app/routes/login.routes"));
const logout_routes_1 = __importDefault(require("./app/routes/logout.routes"));
require("./app/config/passport");
const models_1 = __importDefault(require("./app/database/models"));
dotenv_1.default.config();
const app = express_1.default();
exports.app = app;
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(cors_1.default());
app.use(helmet_1.default());
app.use(express_session_1.default({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.get('/', (req, res) => res.send("Hello World"));
app.use(register_routes_1.default);
app.use(login_routes_1.default);
app.use(user_routes_1.default);
app.use(logout_routes_1.default);
// const umzug = new Umzug ({
//   migrations: {
//     storage: "sequelize",
//     storageOptions: {
//       sequelize: db.sequelize
//     },
//     params: [
//       db.sequelize.getQueryInterface(),db.sequelize.constructor, () => {
//         throw new Error('Migration tried to use old style done callback. please upgrade umzug');
//       }
//     ],
//     path: './app/database/migrations',
//     pattern: /\.js$/,
//   }
// });
// umzug.up().then(()=>{
//     // tslint:disable-next-line:no-console
//   console.log('Migration Done Successfully'); // eslint-disable-line
//     const seeds = new Umzug({
//       storage: "sequelize",
//       storageOptions: {
//         sequelize: db.sequelize
//       },
//       migrations: {
//       params: [
//         db.sequelize.getQueryInterface(), db.sequelize.constructor, () => {
//           throw new Error('Migration tried to use old style done callback. please upgrade umzug');
//         }
//       ],
//       path: './app/database/seeders',
//       pattern: /\.js$/
//     }
//   });
//   seeds.up().then(() => {
//     // tslint:disable-next-line:no-console
//     console.log('Seeding Completed');
//   });
// });
const port = process.env.port;
models_1.default.sequelize.sync().then(() => {
    app.listen(port, () => {
        // tslint:disable-next-line:no-console
        console.log(`Server is listening on port ${port}`);
    });
});
//# sourceMappingURL=app.js.map