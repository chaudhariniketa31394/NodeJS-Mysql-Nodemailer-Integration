import { Request, Response } from 'express'
import { createAuthUserSchema } from '../model/smtpmodel';
import { validatePayload } from '../helper/validator';
import { execute } from '../helper/sql.excuter';
import { sendCreated, sendError } from '../helper/response';
export async function postsmtp(req: Request, res: Response) {
    const validate: any = await validatePayload(createAuthUserSchema, req.body);
    if (validate && validate.isValid && validate.statusCode == 200) {
        let keys = Object.keys(req.body);
        let values = Object.values(req.body);
        let updateQuery = "INSERT INTO user (" + keys.join(",") + ") VALUES ('" + values.join("','") + "')";
        let createQueryResult: any = await execute([updateQuery]);
        if (Array.isArray(createQueryResult) && createQueryResult[0])
            sendCreated(req, res, createQueryResult[0])
        else{
            console.log("createQueryResult",createQueryResult)
            sendError(req, res, 500, createQueryResult)
        }
           

    } else {
        sendError(req, res, validate.statusCode, validate.message)

    }









}


