import express from 'express'
import passport from 'passport'
import logoutController from '../controllers/logout.controller';


const logoutRouter = express.Router()

logoutRouter.get('/api/v1/logout', logoutController.logout)

export default logoutRouter