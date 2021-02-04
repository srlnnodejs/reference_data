const jwt = require('jsonwebtoken');
// const config = require("../config/config");
const config = require("../../config/config");
// const config1=require("../config/config1")
const config1=require("../../config/config1")
function verifyToken(req, res, next){
    console.log(req.headers)
    var token;
    if ('authorization' in req.headers)
        token = req.headers['authorization'].split(' ')[1];
    
    if (!token)
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    else {
        jwt.verify(token,config1.secret,
            (err, decoded) => {
                if (err)
                    return res.status(500).send({ auth: false, message: 'Token authentication failed.' });
                else {
                    // console.log('start decoded');
                    // console.log(decoded.id);
                    // console.log('end decoded');
                    req.userId = decoded.id;
                    next();
                }
            }
        )
    }
}
module.exports=verifyToken;