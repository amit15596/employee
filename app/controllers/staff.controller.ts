import{Request, Response } from 'express';
import Staff from '../models/staff.model';

async function getStaffList(req:Request,res:Response) {
    await Staff.findAll(req,res);
};

export default {
    getStaffList,
}