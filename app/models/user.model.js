import db from '../database/models'

async function create(req,res){
    const userData = {
        firstName: req.body.firstName,
        lastName:  req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        is_active: req.body.is_active,
    }
    db.users.create(userData).then(data => {
        res.json({"status": 200,"message":"Inserted Data Successfully","response": data});
    }).catch(err=>{
        console.log(err);
        res.json({"status": 500,"error": "Internal Server Error"});
    })
}

async function findAll(req,res) {
    db.users.findAll()
    .then(users => {
        res.json({"status": 200,"response": users});
    }).catch(err => {
        console.log(err);
        res.json({"status": 500,"error": "Internal Server Error"});
    })
 }

async function findOne(req,res) {
    const id = req.params.id;
    db.users.findByPk(id)
    .then(user => {
        res.json({"status": 200,"response": user});
    }).catch(err => {
        console.log(err);
        res.json({"status": 500,"error": "Internal Server Error"}); 
    })
}

async function update(req,res){
    const id = req.params.id;
    const userData = {
        firstName: req.body.firstName,
        lastName:  req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        is_active: req.body.is_active,
    }
    db.users.update(userData,
        {
            where: {id:id}
        }
    ).then(data=>{
        res.json({"status": 200,"mesage":"Updated Data Successfully"});        
    }).catch(err => {
        console.log(err);
        res.json({"status": 500,"error": "Internal Server Error"});
    })
}

async function deleteRecord(req,res){
    const id = req.params.id;
    db.user.destroy(
        {
            where: { id: id }
        }
    ).then(user=>{
        res.json({"status": 200,"mesage":"Deleted Data Successfully"});        
    }).catch(err => {
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