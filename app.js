import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from "cors"
import helmet from "helmet"
import session from "express-session"
import passport from "passport"
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

import employeeRoutes from './app/routes/employee.routes'
import loginRoutes from './app/routes/login.routes'
import logoutRoutes from './app/routes/logout.routes'
app.use(loginRoutes)
app.use(employeeRoutes)
app.use(logoutRoutes)
const port = process.env.port;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
