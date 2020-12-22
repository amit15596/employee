import{Request, Response } from 'express';
import Staff from '../models/staff.model';

async function getStaffList(req:Request,res:Response) {
    await Staff.getStaffDetails(req,res);
};

async function AddNewStaff(req:Request,res:Response) {
    await Staff.addStaffDetails(req,res);
}
export default {
    getStaffList,
    AddNewStaff
}