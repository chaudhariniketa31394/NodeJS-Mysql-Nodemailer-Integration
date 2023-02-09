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
exports.postsmtp = void 0;
const smtpmodel_1 = require("../model/smtpmodel");
const validator_1 = require("../helper/validator");
const sql_excuter_1 = require("../helper/sql.excuter");
const response_1 = require("../helper/response");
function postsmtp(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const validate = yield (0, validator_1.validatePayload)(smtpmodel_1.createAuthUserSchema, req.body);
        if (validate && validate.isValid && validate.statusCode == 200) {
            let keys = Object.keys(req.body);
            let values = Object.values(req.body);
            let updateQuery = "INSERT INTO user (" + keys.join(",") + ") VALUES ('" + values.join("','") + "')";
            let createQueryResult = yield (0, sql_excuter_1.execute)([updateQuery]);
            if (Array.isArray(createQueryResult) && createQueryResult[0])
                (0, response_1.sendCreated)(req, res, createQueryResult[0]);
            else {
                console.log("createQueryResult", createQueryResult);
                (0, response_1.sendError)(req, res, 500, createQueryResult);
            }
        }
        else {
            (0, response_1.sendError)(req, res, validate.statusCode, validate.message);
        }
    });
}
exports.postsmtp = postsmtp;
