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
exports.executeQuery = exports.execute = void 0;
const connection_1 = require("../config/connection");
function execute(query) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let Promises = [];
            for (var i = 0; i < query.length; i++) {
                Promises.push(executeQuery(query[i]));
            }
            return yield Promise.all(Promises);
        }
        catch (error) {
            return error;
        }
    });
}
exports.execute = execute;
function executeQuery(query) {
    return new Promise((resolve, reject) => {
        try {
            (0, connection_1.getConnection)(function (err, con) {
                if (!err) {
                    con.query(query, function (err, data) {
                        if (err)
                            reject(err);
                        else
                            console.log("errerrerr", data);
                        resolve(data);
                    });
                }
            });
        }
        catch (error) {
            console.log("errrrrrrrrrrrr", error);
        }
    });
}
exports.executeQuery = executeQuery;
