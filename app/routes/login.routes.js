import express from 'express'

//import local
import loginController from '../controllers/login.controller';

const loginRouter = express.Router()

loginRouter.get('/api/v1/login', (req,res)=>{
    req.render('/api/v1');
})

loginRouter.post('/api/v1/login', loginController.login)

export default loginRouter
