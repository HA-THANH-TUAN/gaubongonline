const cloudinary = require('cloudinary').v2
const {CloudinaryStorage} =require('multer-storage-cloudinary')
const multer = require("multer")
cloudinary.config({ 
    cloud_name: 'hathanhtuan', 
    api_key: '744323586139521', 
    api_secret: 'Ie74f7LfKlQ9O4Iqw6my7XDHsLo' 
  });

  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    allowedFormats:["jpg" ,"png"],
    params: {
      folder: 'gaubongonline',
    },
  });
   
  const uploadCloud = multer({ storage: storage });
  module.exports={cloudinary,uploadCloud};



