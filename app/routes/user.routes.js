// import node module
import express from 'express'
import passport from 'passport'

// import local files
import userController from '../controllers/user.controller'
import userValidation from '../validation/user.validation'

const userRouter = express.Router()

userRouter.get('/api/v1/user', passport.authenticate('jwt', { session: false }),userController.getUserList);

userRouter.get('/api/v1/user/:id', passport.authenticate('jwt', { session: false }), userController.getUserDetails);

userRouter.post('/api/v1/user', passport.authenticate('jwt', { session: false }) ,userValidation, userController.addUserDetails);

userRouter.put('/api/v1/user/:id',passport.authenticate('jwt', { session: false }), userValidation ,userController.updateUserDetails);

userRouter.delete('/api/v1/user/:id', passport.authenticate('jwt', { session: false }),userController.deleteUserDetails);

export default userRouter