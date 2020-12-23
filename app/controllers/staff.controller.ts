import{Request, Response } from 'express';
import Staff from '../models/staff.model';

async function getStaffList(req:Request,res:Response) {
    await Staff.getStaffDetails(req,res);
};

async function addNewStaff(req:Request,res:Response) {
    await Staff.addStaffDetails(req,res);
};
async function editStaff(req:Request,res:Response) {
    await Staff.editStaffDetails(req,res);
}
async function deleteStaff(req:Request, res:Response){
    await Staff.deleteStaffDetails(req,res);
};
export default {
    getStaffList,
    addNewStaff,
    deleteStaff,
    editStaff
}