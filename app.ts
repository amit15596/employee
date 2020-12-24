import express, {Request, Response} from 'express';
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from "cors"
import helmet from "helmet"
import session from "express-session"
import passport from "passport"
import Umzug from "umzug"

// local imports
import regRoutes   from './app/routes/register.routes'
import userRoutes  from './app/routes/user.routes'
import loginRoutes  from './app/routes/login.routes'
import logoutRoutes  from './app/routes/logout.routes'
import staffRouter from './app/routes/staff.routes'
import "./app/config/passport"
import db  from './app/database/models'

dotenv.config()
const app:express.Express = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(helmet())

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize());
// app.use(passport.session());

app.get('/', (req:Request,res:Response) => res.send("Hello World"))
app.use(regRoutes)
app.use(loginRoutes)
app.use(userRoutes)
app.use(logoutRoutes)
app.use(passport.authenticate("jwt", { session: false }), staffRouter)

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

const port:string = process.env.port ;
db.sequelize.sync().then(()=>{
  app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server is listening on port ${port}`)
  });
});

export {app};