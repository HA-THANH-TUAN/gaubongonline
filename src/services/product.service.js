const { uploadCloudImage } = require("../config/cloudinary.config")

class Product {
    addCatalog=async(data)=>{
        console.log("Đã vô được service::", data)
            // uploadCloudImage.single()
    }
}

module.exports=new Product()