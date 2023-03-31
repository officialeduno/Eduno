// Next.js API route support: http://localhost:3000/auth/forgot

// Import forgot schema from models
import connectDb from "@/middleware/mongoose";

// Use cryptoJS for encrypt the password
var CryptoJS = require("crypto-js");

// Import user schema
import users from "@/models/users";

// Use JWT to authenticate the token
var jwt = require('jsonwebtoken');

var nodemailer = require('nodemailer');

import { useRouter } from 'next/router'

// Handler to use for middleware
const handler = async (req, res) => {

    // POSR method to call the API
    if (req.method == 'POST') {

        const {npassword, userid, forgot_token} = req.body;

        let success = true;

        const user = await users.findOne({_id: userid});

        if(!user){
            success = false;
            return res.status(400).json({success, error: "user not found"});
        }
        else{
            const secret = process.env.secret_key + user.password;

            const verify = jwt.verify(forgot_token, secret)

            if(verify){
                let sec_password = CryptoJS.AES.encrypt(npassword, process.env.secret_key).toString();
                user.password = sec_password;
                user.save();
                res.status(200).json({verification:"verified"})
            }
            else{
                return res.status(400).json({success: false, error: "Invalid Token"})
            }
        }
    }
    else {
        res.status(400).json({ error: "This is not allowed" });
    }


}

export default connectDb(handler);