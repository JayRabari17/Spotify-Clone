const jwt = require('jsonwebtoken');
require('dotenv').config();
//creating multiple json objects, so that we can export multiple functions
exports = {}

exports.getToken = async (email,user)=>{
    //
    const token = jwt.sign({identifier: user._id},process.env.secret_key_pass_jwt);
    // console.log(token);
    return token;
}

module.exports = exports;
