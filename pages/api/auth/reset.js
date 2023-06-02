import connectDb from "@/middleware/mongoose";
import users from "@/models/users";

var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler = async (req, res) => {
    if (req.method == 'POST') {
        const {npassword, userid, forgot_token} = req.body;
        let success = true;
        const user = await users.findOne({_id: userid});
        if(!user){
            success = false;
            return res.status(400).json({success, error: "user not found"});
        } else{
            const secret = process.env.secret_key + user.password;
            const verify = jwt.verify(forgot_token, secret);
            if(verify){
                let sec_password = CryptoJS.AES.encrypt(npassword, process.env.secret_key).toString();
                user.password = sec_password;
                user.save();
                res.status(200).json({success: true});
            } else{
                return res.status(400).json({success: false, error: "Invalid Token"});
            }
        }
    } else {
        res.status(400).json({ error: "This is not allowed" });
    }
}

export default connectDb(handler);