import { Request, Response } from 'express'
import { sendError } from '../helper/response';
import { execute } from '../helper/sql.excuter'
import { validatePayload } from '../helper/validator';
import { emailSchema } from '../model/smtpmodel';
import { sendEmail } from '../utils/sendmail'

export async function sendmail(req: Request, res: Response) {
    console.log("requestt",req.body)
    const validate:any = await validatePayload(emailSchema, req.body);
    console.log("validate",validate)
    if (validate && validate.isValid && validate.statusCode ==200) {
        const query = `SELECT * FROM user WHERE nodemailerauthuser = 1;`
        var updateQueryResult: any = await execute([query]);
       sendEmail(req,res,updateQueryResult[0],req.body)
    }
    else
    {
        sendError(req, res, validate.statusCode, validate.message)
    }


}
