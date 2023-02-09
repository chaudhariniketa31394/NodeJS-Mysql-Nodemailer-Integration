import nodemailer from "nodemailer";
import {Request,Response} from 'express'
import { sendError, sendSuccess } from "../helper/response";

export const sendEmail = async (req:Request,res:Response,authuser:any,mailObj:any) => {
  const transporter = nodemailer.createTransport({
    host: authuser.SMTPHost,
    secure: authuser.smtpsecure,
    port: authuser.SMTPPort,
    auth: {
      user: authuser.username,
      pass: authuser.password,
    }
  });

  const options = {
    from: authuser.username,
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