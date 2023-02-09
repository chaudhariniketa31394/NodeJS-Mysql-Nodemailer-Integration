"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConnection = void 0;
const mysql_1 = __importDefault(require("mysql"));
const connection = require('./database');
var pool = mysql_1.default.createPool(connection.development);
const getConnection = function (callback) {
    pool.getConnection(function (error, connection) {
        if (error) {
            return callback(error);
        }
        callback(error, connection);
    });
};
exports.getConnection = getConnection;
