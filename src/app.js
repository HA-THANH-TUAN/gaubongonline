const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path');
const routerUser = require('./routes/api/user.route');
const routerAuth = require('./routes/api/auth.route')
const routerRedis = require('./routes/api/test.route')
const cors=require("./middleware/cors")
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
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json()); 
app.use("/authentication",routerAuth)
app.use("/user",routerUser)
app.use("/redis",routerRedis)

// app.post("/upload/image",(()=>uploadCloud.single("image"))(),async(req, res)=>{
//   console.log('>>>:::req' , req.file.path);
//   // console.log('>>>:::res' , res);
//   return res.json(req.file)

// })


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