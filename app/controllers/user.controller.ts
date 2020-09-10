import{Request, Response } from 'express';
import User from '../models/user.model';

async function getUserList(req:Request,res:Response) {
    await User.findAll(req,res);
};

async function getUserDetails(req:Request,res:Response) {
    await User.findOne(req,res);
};

async function addUserDetails(req:Request,res:Response) {
    await User.create(req,res);
};

async function updateUserDetails(req:Request,res:Response) {
    await User.update(req,res);
};

async function deleteUserDetails(req:Request,res:Response) {
    await User.deleteRecord(req,res);
};

export default {
    getUserList,
    getUserDetails,
    addUserDetails,
    updateUserDetails,
    deleteUserDetails
}
