import { Request, Response } from "express"

// import local model
import db from "../database/models"

console.log(db.staff, '+++++')
async function findAll(req: Request, res: Response) {
    db.users
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

export default {
    findAll
}
