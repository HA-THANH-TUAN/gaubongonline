"use strict"
const mysql = require('mysql2');
const configDatabase = require("../config/db.config")
class Database {
    constructor(){
        this.pool=this.connect()
    }
    connect(){
        const pool = mysql.createPool({...configDatabase,connectionLimit: 10});
        pool.query(`select * from Users` , (req, data)=>{
          console.log("Oke", data);
        })
        pool.getConnection((error, result)=>{
            if(result){
              console.log(`Connected database ${result.config.database} & PORT ${result.config.port}`)
            }
            else {
              console.error("Connect database Fail !!! ")
            }
          })            
        return pool        
    }
    static getInstance(){
        if(!Database.instance){
            Database.instance=new Database()
        }
        return Database.instance
    }
}
module.exports=Database.getInstance().pool