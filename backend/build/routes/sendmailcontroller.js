"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route = express_1.default.Router();
const mail_send_service_1 = require("../service/mail.send.service");
route.post('/send-email', (req, res) => (0, mail_send_service_1.sendmail)(req, res));
exports.default = route;
