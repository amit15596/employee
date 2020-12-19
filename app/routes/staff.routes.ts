import express from 'express'

import userController from '../controllers/staff.controller'

const staffRouter = express.Router()

staffRouter.get('/api/v1/staff',userController.getStaffList);

// staffRouter.post('/api/v1/staff')

export default staffRouter;