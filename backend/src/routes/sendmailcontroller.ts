import express, { Request, Response} from 'express';
const route = express.Router();
import {sendmail} from '../service/mail.send.service'


route.post('/send-email',(req:Request,res:Response)=>sendmail(req,res))

export default route;





