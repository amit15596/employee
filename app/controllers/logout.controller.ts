import{Request, Response } from 'express';

async function logout(req:Request, res:Response) {
    req.logout()
    res.redirect("/")
}

export default { logout }
