const multer = require('multer');
const DIR = './uploads';
const path=require("path")
var ImageValues= '';

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,__dirname+'/uploads');
    },
    filename: (req, file, cb) => {
        ImageValues = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
        
        cb(null, ImageValues);
    }
});


const fileFilter = function(req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF|apk)$/)) {
        req.fileValidationError = 'Only logo and apk file allowed';
        return cb(new Error('Only logo and apk file are allowed!'), false);
    }
    cb(null, true);
};




//	application/vnd.android.package-archive or application/octet-stream
/*
const fileFilter = (req,file,cb) => {
    
    if(file.mimetype === "text/csv"  || 
        file.mimetype === "vnd.android.package-archive/apk"||
       file.mimetype === "image/jpg"  || 
       file.mimetype ==="image/jpeg"  || 
       file.mimetype ===  "image/png"
       ){
    cb(null, true);
   }else{
      cb("Image uploaded is not of type jpg/jpeg/png",false);
    }
}*/
let upload = multer({ storage: storage,fileFilter : fileFilter });
module.exports=upload;