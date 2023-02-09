"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const response_1 = require("../helper/response");
const sendEmail = (req, res, authuser, mailObj) => __awaiter(void 0, void 0, void 0, function* () {
    const transporter = nodemailer_1.default.createTransport({
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
        html: mailObj.body
    };
    // Send Email
    transporter.sendMail(options, (err, info) => {
        if (err) {
            (0, response_1.sendError)(req, res, 500, err);
        }
        else {
            (0, response_1.sendSuccess)(req, 'email sent successfully', info);
        }
    });
});
exports.sendEmail = sendEmail;
exports.default = exports.sendEmail;
