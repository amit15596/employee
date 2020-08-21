import express from 'express';
import employeeController from '../controllers/employee.controller';

const EmpRouter = express.Router()

EmpRouter.get('/api/v1/employees', employeeController.getEmployeeList);

EmpRouter.get('/api/v1/employees/:id', employeeController.getEmployeeDetails);

EmpRouter.post('/api/v1/employees', employeeController.addEmployeeDetails);

EmpRouter.put('/api/v1/employees/:id', employeeController.updateEmployeeDetails);

EmpRouter.delete('/api/v1/employees/:id', employeeController.deleteEmployeeDetails);

export default EmpRouter
