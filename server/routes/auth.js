const express = require('express');
const router = express.Router();
const user = require('../models/user');
const bcrypt = require('bcrypt');
const {getToken} = require('../utils/helper');

router.post('/register',async (req,res)=>{
    //called when /register api is called for post request
    const {username,email,password,firstname,lastname} = req.body;

    const user = await user.findOne({email:email});
    if(user){
        //commonly 4.. code used for authentication errors
        return res.status(403).json({error:"A user already exists!"});
    }
    //else valid request
    hashedpassword = await bcrypt.hash(password,10);
    const newUserData = {username,email,password:hashedpassword,firstname,lastname};

    const newUser = await user.create(newUserData);

    //after registration, we need to assign a token to every user
    //creating commonly used functions across different apis in utils folder such as getToken
    const token = await getToken(email,newUser);
    // var tokenstr = " ";
    // token.then((result)=>{
    //  // "Some User token"
    //     tokenstr = result;
    //     console.log(result);
    //  });
    // console.log(tokenstr);
    //returning result to user
    newUser.token = token;
    const userToReturn = {...newUser.toJSON(),token};
    delete userToReturn.password;
    //200 is for successful authentication
    return res.status(200).json(userToReturn);
});

router.post('/login',async (req,res)=>{
    const {email,password} = req.body;
    const User = await user.findOne({email:email});
    if(!User){
        return res.status(403).json({err: "Invalid credentials"});
    }
    // console.log(pass);
    const isPassValid = await bcrypt.compareSync(password, User.password);
    if(!isPassValid){
        return res.status(403).json({err: "Invalid Credentials"});
    }
    token = await getToken(User.email,User);
    // User = await user.update({email:email},{$set:{token:token}});
    const userToReturn = {...User.toJSON(),token}
    delete userToReturn.password;
    return res.status(200).json(userToReturn);

});

module.exports = router;
