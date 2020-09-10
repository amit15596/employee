// import node module
import express from 'express'

// import local files
//import registerValidation from '../validation/register.validation'
import registerController from '../controllers/register.controller'

const regRouter = express.Router()

regRouter.post('/api/v1/register', registerController.register)

export default regRouter;
