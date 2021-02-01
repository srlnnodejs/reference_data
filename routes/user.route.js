const httpStatus = require('http-status');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload=require("../utils/uploadImage")
//const path=require("path")
const userController = require('../controllers/user.controller');

// router.post('/add-user', upload.fields([{
//         name: 'logo', maxCount: 1
//   }]),async (req,res) => {
//       console.log(req.body);
// console.log(req.file);
//     if (!req.file) {
//         console.log("No file received");
//        // res.send({ success: false });
//     } else {
//         console.log("file received ");
//         //res.send({ success: true })
//     }
//     userController.create({
//         name:req.body.name,
//         email:req.body.email,
//         phone:req.body.phone,
//         password:req.body.password
//     })
//     await res.json({
//         status:httpStatus.OK,
//         response: {
//             "appName": req.body.appName,
//             "appVersion":req.body.appVersion,
//             "apk": req.files.apk[0].path,
//             "logo": req.files.logo[0].path
//         }
//     })



router.post('/add-user',upload.single('logo'),async (req,res) => {
      console.log(req.body);
console.log(req.file);
    if (!req.file) {
        console.log("No file received");
       // res.send({ success: false });
    } else {
        console.log("file received ");
        //res.send({ success: true })
    }
    userController.create({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        password:req.body.password
    })
    await res.json({
        status:httpStatus.OK,
        response: {
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        password:req.body.password,
        file:req.file
        }
    })
})





module.exports=router;