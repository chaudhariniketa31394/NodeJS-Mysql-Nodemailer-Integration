"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route = express_1.default.Router();
const smtp_service_1 = require("../service/smtp.service");
route.post('/smtp-setting', (req, res) => (0, smtp_service_1.postsmtp)(req, res));
exports.default = route;
