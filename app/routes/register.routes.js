// import node module
import express from 'express'

// import local files
import registerController from '../controllers/register.controller'

const regRouter = express.Router()

regRouter.post('/api/v1/register', registerController.register)

export default regRouter;
