const user = require("../models/user.model");
exports.create = async (doc) => {
//console.log(doc.file);
return await user.create(doc);
};