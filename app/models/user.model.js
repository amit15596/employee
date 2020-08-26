import db from '../database/models'
//import user from '../database/models/user'

function findAll(req,res) {
    console.log(db);
   db.user.findAll().
    then(users => {
        console.log(users);
        res.json(users);
    })
}

export default {
    findAll,
}