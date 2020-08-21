import dbConnection from '../config/db.config';
import status from '../config/static';

async function findAll(req,res) {
    try{
        const sql = "select * from employee";
        dbConnection.query(sql, (err,result) => {
            if(err) throw err;
            res.json({"status": status.OK,"response": result});
        });
    } catch(error){
        console.log(error);
        res.json({"status": 500,"error": "Internal Server Error"});
    }
};

async function find(req,res) {
    try{
        const id = req.params.id;
        dbConnection.query("select * from employee where e_id= ? ", id , (err,result) => {
            if(err) throw err;
            res.json({"status": status.OK,"response": result});
        });
    } catch(error){
        console.log(error);
        res.json({"status": 500,"error": "Internal Server Error"});    }
}

async function deleteRecord(req,res) {
    try{
        const id = req.params.id;
        dbConnection.query("DELETE FROM employees WHERE e_id = ?", [id] , (err) => {
            if(err) throw err;
            res.json({"status": status.OK,"message": "Delete Data Sucessfully"});
        });
    } catch(error){
        console.log(error);
        res.json({"status": 500,"error": "Internal Server Error"});
    }
}

async function create(req,res) {
    try{

        let first_name= req.body.first_name;
        let last_name= req.body.last_name;
        let email= req.body.email;
        let password= req.body.password;
        let phone= req.body.phone;
        let gender= req.body.gender;
        let created_by= req.body.created_by || 'NULL';
        let r_id= req.body.r_id;
        
        let sql = "INSERT INTO employee (first_name,last_name,email,password,phone,gender,created_by,r_id) values('"+ first_name +"','"+ last_name +"','"+ email +"','"+ password +"','"+ phone +"','"+ gender +"','"+ created_by +"','"+ r_id +"')";        
        dbConnection.query(sql,(err) => {
            if(err) throw err;
            res.json({"status": status.OK,"message": "Data inserted Sucessfully"});
        });
    } catch(error){
        console.log(error);
        res.json({"status": 500,"error": "Internal Server Error"});
    }
}

async function update(req,res) {
    try{
        let id = req.params.id;
        let first_name= req.body.first_name;
        let last_name= req.body.last_name;
        let email= req.body.email;
        let password= req.body.password;
        let phone= req.body.phone;
        let gender= req.body.gender;
        let updated_by= req.body.updated_by || 'NULL';
        let r_id= req.body.r_id;
        
        let sql = "UPDATE employee SET first_name = '"+ first_name +"',last_name = '"+ last_name +"',email = '"+ email +"',phone ='"+ phone +"',gender='"+ gender +"',updated_by = '"+ updated_by +"',r_id='"+ r_id +"' where e_id ="+ id +"";        
        console.log(sql);
        dbConnection.query(sql,(err) => {
            if(err) throw err;
            res.json({"status": 200,"message": "Data Update Sucessfully"});
        });
    } catch(error){
        console.log(error);
        res.json({"status": 500,"error": "Internal Server Error"});
    }
}

export default {
    findAll,
    find,
    deleteRecord,
    create,
    update
}


    