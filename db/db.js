const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/userDb",
 { useNewUrlParser: true,useUnifiedTopology: true }).then(function(resolved){
     console.log("db connected")
 })