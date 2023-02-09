import express, {Request, Response} from 'express';
const route = express.Router();
import {postsmtp} from '../service/smtp.service';


route.post('/smtp-setting',(req:Request,res:Response) => postsmtp(req,res))

export default route;