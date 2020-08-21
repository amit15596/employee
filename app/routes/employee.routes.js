import express from 'express';
import employeeController from '../controllers/employee.controller';

const router = express.Router()

router.get('/api/v1/employees', employeeController.getEmployeeList);

router.get('/api/v1/employees/:id', employeeController.getEmployeeDetails);

router.post('/api/v1/employees', employeeController.addEmployeeDetails);

router.put('/api/v1/employees/:id', employeeController.updateEmployeeDetails);

router.delete('/api/v1/employees/:id', employeeController.deleteEmployeeDetails);

module.exports = router;
