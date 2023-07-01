const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path');
const routerUser = require('./routes/api/user.route');
const routerAuth = require('./routes/api/auth.route')
const routerRedis = require('./routes/api/test.route')
const routerAdminProduct= require("./routes/api/admin/admin.product.route")
const cors=require("./middleware/cors")
const jwt=require("jsonwebtoken")
// const {uploadCloud,cloudinary} = require('./config/cloudinary.config');
// const { urlencodedParser } = require('./middleware/bodyParser');
app.use('/static', express.static(path.join(__dirname, '../public')))

//====> middleware
app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204 
}))



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); 
app.use("/authentication",routerAuth)
app.use("/user",routerUser)
app.use("/admin",routerAdminProduct )

app.use((req, res, next)=>{
  const error=new Error("Not Found")
  error.status=404
  next(error)

})

app.use((error, req, res, next)=>{
  console.log(error)
  const statusCode=error.status || 500
  const errorMesage=error.message|| "Internal Server"
  res.status(statusCode).json({
    code:statusCode,
    message: errorMesage
  })

})
// app.use("/redis",routerRedis)




// const token=jwt.sign({name:"Ha Thanh Tuan", age: "20"}, secretKey, { expiresIn: 60,algorithm:'RS256'})
// console.log("token:::",token)

// jwt.verify(token,publicKey,(error, result)=>{
//   console.log("err:::",error)
//   console.log("oke:::",result)
// })
// console.log("end:::")
// app.delete("/upload/image",(req, res)=>{
//   cloudinary.uploader.destroy("gaubongonline/k1y1umoh41lysxei0icz", (error, result) => {
//     if (error) {
//       console.log('Error deleting image:', error);
//       return res.json(error)
//     } else {
//       console.log('Image deleted successfully:', result);
//       return res.json(result)
//     }
//   })
 
// })
// app.put("/upload/image",(req, res)=>{
//   cloudinary.api.restore("gaubongonline/evc299mbzjov6jrenxxw", (error, result) => {
//     if (error) {
//       console.log('Error deleting image:', error);
//       return res.json(error)
//     } else {
//       console.log('Image deleted successfully:', result);
//       return res.json(result)
//     }
//   })
 
// })

// const connectD = async()=>{
//   console.log(">>>> sau await");
//   connectDatabase.query("SELECT * FROM products", function(err, rows) {
//     console.log("error:::", err);
//     console.log("data:::", rows);
//   })
// }
// connectD()

// console.log(connectDatabase)



module.exports=app