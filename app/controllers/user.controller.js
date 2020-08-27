import User from '../models/user.model';

async function getUserList(req,res) {
    await User.findAll(req,res);
};

async function getUserDetails(req,res) {
    await User.findOne(req,res);
};

async function addUserDetails(req,res) {
    await User.create(req,res);
};

async function updateUserDetails(req,res) {
    await User.update(req,res);
};

async function deleteUserDetails(req,res) {
    await User.deleteRecord(req,res);
};

export default {
    getUserList,
    getUserDetails,
    addUserDetails,
    updateUserDetails,
    deleteUserDetails
}
