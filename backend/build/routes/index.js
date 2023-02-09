"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sendmailcontroller_1 = __importDefault(require("./sendmailcontroller"));
const smtpsettingcontroller_1 = __importDefault(require("./smtpsettingcontroller"));
const routes = [
    sendmailcontroller_1.default,
    smtpsettingcontroller_1.default
];
exports.default = routes;
