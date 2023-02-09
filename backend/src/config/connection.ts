import mysql from 'mysql';

const connection = require('./database');

var pool = mysql.createPool(connection.development);

export const getConnection = function (callback:any) {
    pool.getConnection(function (error, connection) {
        if (error) {
            return callback(error);
        }
        callback(error, connection);
    });
};








