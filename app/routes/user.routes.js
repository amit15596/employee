import express from 'express';
import userController from '../controllers/user.controller';

const userRouter = express.Router()

userRouter.get('/api/v1/user', userController.getUserList);

userRouter.get('/api/v1/user/:id', userController.getUserDetails);

userRouter.post('/api/v1/user', userController.addUserDetails);

userRouter.put('/api/v1/user/:id', userController.updateUserDetails);

userRouter.delete('/api/v1/user/:id', userController.deleteUserDetails);

export default userRouter