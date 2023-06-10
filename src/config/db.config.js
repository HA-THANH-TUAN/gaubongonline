require('dotenv').config()


const dev= {
        host: process.env.DEV_DB_HOST || "localhost",
        user: process.env.DEV_DB_USER || "root",
        password: process.env.DEV_DB_PASSWOWD || "123456789",
        database: process.env.DEV_DB_NAME || "hoidanit",
        port: process.env.DEV_DB_PORT || "3307"
    }

const pro={
        host: process.env.PRO_DB_HOST || "localhost",
        user: process.env.PRO_DB_USER || "root",
        password: process.env.PRO_DB_PASSWOWD || "123456789",
        database: process.env.PRO_DB_NAME || "hoidanit",
        port: process.env.PRO_DB_PORT || "3307"
    }


const config={pro, dev}
const env=process.env.NODE_ENV || "dev"


module.exports=config[env]