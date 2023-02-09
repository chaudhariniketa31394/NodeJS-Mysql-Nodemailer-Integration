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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendmail = void 0;
const response_1 = require("../helper/response");
const sql_excuter_1 = require("../helper/sql.excuter");
const validator_1 = require("../helper/validator");
const smtpmodel_1 = require("../model/smtpmodel");
const sendmail_1 = require("../utils/sendmail");
function sendmail(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("requestt", req.body);
        const validate = yield (0, validator_1.validatePayload)(smtpmodel_1.emailSchema, req.body);
        console.log("validate", validate);
        if (validate && validate.isValid && validate.statusCode == 200) {
            const query = `SELECT * FROM user WHERE nodemailerauthuser = 1;`;
            var updateQueryResult = yield (0, sql_excuter_1.execute)([query]);
            (0, sendmail_1.sendEmail)(req, res, updateQueryResult[0], req.body);
        }
        else {
            (0, response_1.sendError)(req, res, validate.statusCode, validate.message);
        }
    });
}
exports.sendmail = sendmail;
