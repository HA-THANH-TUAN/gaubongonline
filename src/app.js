const express = require('express')
const bodyParser = require('body-parser')
const multer=require("multer")
const app = express()
const path = require('path');
const routerUser = require('./routes/api/user.route');
const routerAuth = require('./routes/api/auth.route')
const routerRedis = require('./routes/api/test.route')
const routerAdminProduct= require("./routes/api/admin/admin.product.route")
const cors=require("./middleware/cors")
const jwt=require("jsonwebtoken")
const {uploadCloud,cloudinary} = require('./config/cloudinary.config');
 
app.use('/static', express.static(path.join(__dirname, '../public')))

//====> middleware
app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204 
}))

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:false}));
app.use("/authentication",routerAuth)
app.use("/user",routerUser)
app.use("/admin",routerAdminProduct )


const uploadFormData = multer();

app.post('/test-upload',uploadFormData.fields([{name:"images2"},{name:"images"}]) ,async(req, res, next) => {
  
  console.log("request file", req.files)
  console.log("request body", req.body)
  
  // Access the uploaded image file via req.file
  // const { filename, path } = req.file;
  // console.log("all data File:::", req.file)
  // console.log('Image uploaded:', filename);
  // console.log('Image path:', path);
  // console.log("_____________________________")

  //  const upload =()=>{
  //       return new Promise((okay, fail)=>{
  //         cloudinary.uploader.upload(path,{filename_override:`hathanhtuan_${filename}`},(error,result )=>{
  //           error  ? fail(error) : okay(result)
  //         })
  //       })
  //     }
  //     const data= await upload()
      res.json({
        message: "Oke"
      })

});








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





module.exports=app