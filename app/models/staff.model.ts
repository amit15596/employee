import { Request, Response } from "express"

// import local model
import db from "../database/models"

async function getStaffDetails(req: Request, res: Response) {
    db.staffs
        .findAll()
        .then((staff) => {
            res.json({ status: 200, response: staff })
        })
        .catch((err) => {
            // tslint:disable-next-line:no-console
            console.log(err)
            res.json({ status: 500, error: "Internal Server Error" })
        })
}

async function addStaffDetails(req: Request, res: Response) {
    const staffData = {
        name: req.body.name,
        salary: req.body.salary,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        designation: req.body.designation,
        age: req.body.age,
    }
    db.staffs
        .create(staffData)
        .then((data) => {
            res.json({
                status: 200,
                message: "Inserted Data Successfully",
                response: data,
            })
        })
        .catch((err) => {
            // tslint:disable-next-line:no-console
            console.log(err)
            res.json({ status: 500, error: "Internal Server Error" })
        })
}
async function editStaffDetails(req: Request, res: Response) {
    const id: Number = parseInt(req.params.id)
    const staffData = {
        name: req.body.name,
        salary: req.body.salary,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        designation: req.body.designation,
        age: req.body.age,
    }
    db.staffs.update(staffData,
        {
            where: {
                id:id
            }
        }
    ).then(data=>{
        res.json({"status": 200,"mesage":"Updated Data Successfully"});
    }).catch(err => {
        // tslint:disable-next-line:no-console
        console.log(err);
        res.json({"status": 500,"error": "Internal Server Error"});
    })
}
async function deleteStaffDetails(req: Request, res: Response) {
    const id: Number = parseInt(req.params.id)
    db.staffs.destroy({
        where: {
            id:id 
        },
    }).then(staff=>{
        res.json({"status": 200,"mesage":"Deleted Data Successfully"});
    }).catch(err => {
        // tslint:disable-next-line:no-console
        console.log(err);
        res.json({"status": 500,"error": "Internal Server Error"});
    })
}

export default {
    getStaffDetails,
    addStaffDetails,
    deleteStaffDetails,
    editStaffDetails
}
