import Employee from '../models/employee.model';

async function getEmployeeList(req,res) {
    await Employee.findAll(req,res);
};

async function getEmployeeDetails(req,res) {
    await Employee.find(req,res);
};

async function addEmployeeDetails(req,res) {
    await Employee.create(req,res);
};

async function updateEmployeeDetails(req,res) {
    await Employee.update(req,res);
};

async function deleteEmployeeDetails(req,res) {
    await Employee.deleteRecord(req,res);
};

export default {
    getEmployeeList,
    getEmployeeDetails,
    addEmployeeDetails,
    updateEmployeeDetails,
    deleteEmployeeDetails
}