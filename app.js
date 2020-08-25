// node imports
import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from "cors"
import helmet from "helmet"
import session from "express-session"
import passport from "passport"
import Sequelize  from "sequelize"
import Umzug from "umzug"
import mysql from "mysql"

// local imports
import employeeRoutes from './app/routes/employee.routes'
import loginRoutes from './app/routes/login.routes'
import logoutRoutes from './app/routes/logout.routes' 
import "./app/config/passport"
import db from "./app/config/config.json"

dotenv.config()

const app = express()

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
app.use(passport.session());

app.get('/', (req, res) => {
  res.send("Hello World")
})
app.use(loginRoutes)
app.use(employeeRoutes)
app.use(logoutRoutes)

var sequelize = new Sequelize('amit_training', 'amit_sahu', 'k6rg*CPt3p#B', {
  host: '95.217.158.21',
  port: 3306,
  dialect: 'mysql'
});

const umzug = new Umzug ({
  migrations: {
    path: './migrations',
    pattern: /\.js$/,
    params: [
      sequelize.getQueryInterface()
    ]
  },
  storage: 'sequelize',
  storageOptions: {
    sequelize: sequelize
  }
});

umzug.up();
// (async () =>{
//   await 
//   console.log('All migrations performed successfully')
// })

const port = process.env.port;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
