const express =require('express')
const router=express.Router()
const addCatalogController=require("../../../controllers/product.controller")
const { asyncHandler } = require('../../../core/error.response')

router.get("/products",(req,res, next)=>{
    res.json("Res ROuter")

})
router.post("/add-catalog", asyncHandler(addCatalogController.addCatalog)) 







module.exports=router