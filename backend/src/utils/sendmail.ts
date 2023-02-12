import nodemailer from "nodemailer";
import {Request,Response} from 'express'
import { sendError, sendSuccess } from "../helper/response";

export const sendEmail = async (req:Request,res:Response,authuser:any,mailObj:any) => {
  const transporter = nodemailer.createTransport({
    host: authuser[0].SMTPHost,
    secure: authuser[0].smtpsecure == 'SSL' ? true:false,
    port: authuser[0].SMTPPort,
    auth: {
      user: authuser[0].username,
      pass: authuser[0].password,
    }
  });

  const options = {
    from: authuser[0].username,
    to: mailObj.email,
    // replyTo: reply_to,
    subject: mailObj.subject,
    html:mailObj.body
  };

  // Send Email
  transporter.sendMail(options, (err:any, info:any) => {
    if (err) {
        sendError(req,res,500,err)
    } else {
      sendSuccess(req,'email sent successfully',info);
    }
  });
};

export default sendEmail;
