const jwt = require('jsonwebtoken');
const { parse } = require('dotenv');
const UserModel = require('../models/userModel');

const requiresignin = (req, res, next) => {
    try{
const decode = jwt.verify(req.headers.authorization, "g&y");
req.user = decode;
next();
    }
    catch(error){
        console.log(error);
        res.status(401).send({message: "Invalid Token"});
    }
}
// admin access
const adminAccess =async (req, res, next) => {
    try{
        const user =  await UserModel.findById(req.user._id);
        if(parseInt(user.role)!== parseInt(1) ){
            console.log(user.role);
            return res.status(401).send({message: "Admin Access Denied"});
        }
        else {
            next();
        }
    }
    catch(error){
        console.log(error);
        res.status(401).send(error)
    }
}

module.exports = {requiresignin , adminAccess}