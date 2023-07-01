"use strict"
const mysql = require('mysql2');
const configDatabase = require("../config/db.config")
const mysqlPool= mysql.createPool({...configDatabase, connectionLimit:10})
module.exports=mysqlPool.promise()