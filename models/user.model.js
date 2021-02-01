var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var user = new Schema({
  name: { type: String, required: false },
  email: { type: String, required: false },
  phone: { type: String, required: false },
  password: { type: String, required:false },
  profileImage: { type: String, required:false }
});
module.exports = mongoose.model("user",user);
