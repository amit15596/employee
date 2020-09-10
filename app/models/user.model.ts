import{Request, Response } from 'express';

// import node modules
import bcrypt from 'bcrypt'

// import local model
import db from '../database/models'

async function create(req:Request,res:Response){
    const userData = {
        firstName: req.body.firstName,
        lastName:  req.body.lastName,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10),
        phone: req.body.phone,
        is_active: req.body.is_active,
    }
    db.users.create(userData).then(data => {
        res.json({"status": 200,"message":"Inserted Data Successfully","response": data});
    }).catch(err=>{
        // tslint:disable-next-line:no-console
        console.log(err);
        res.json({"status": 500,"error": "Internal Server Error"});
    })
}

async function findAll(req:Request,res:Response) {
    db.users.findAll()
    .then(users => {
        res.json({"status": 200,"response": users});
    }).catch(err => {
        // tslint:disable-next-line:no-console
        console.log(err);
        res.json({"status": 500,"error": "Internal Server Error"});
    })
 }

async function findOne(req:Request,res:Response) {
    const id:string = req.params.id;
    db.users.findByPk(id)
    .then(user => {
        res.json({"status": 200,"response": user});
    }).catch(err => {
        // tslint:disable-next-line:no-console
        console.log(err);
        res.json({"status": 500,"error": "Internal Server Error"});
    })
}

async function update(req:Request,res:Response){
    const id:string = req.params.id;
    const userData = {
        firstName: req.body.firstName,
        lastName:  req.body.lastName,
        email: req.body.email,
        password: bcrypt(req.body.password, 10),
        phone: req.body.phone,
        is_active: req.body.is_active,
    }
    db.users.update(userData,
        {
            where: {id}
        }
    ).then(data=>{
        res.json({"status": 200,"mesage":"Updated Data Successfully"});
    }).catch(err => {
        // tslint:disable-next-line:no-console
        console.log(err);
        res.json({"status": 500,"error": "Internal Server Error"});
    })
}

async function deleteRecord(req:Request,res:Response){
    const id:string = req.params.id;
    db.user.destroy(
        {
            where: { id }
        }
    ).then(user=>{
        res.json({"status": 200,"mesage":"Deleted Data Successfully"});
    }).catch(err => {
        // tslint:disable-next-line:no-console
        console.log(err);
        res.json({"status": 500,"error": "Internal Server Error"});
    })
}
export default {
    create,
    findOne,
    findAll,
    update,
    deleteRecord
}