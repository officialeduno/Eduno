import users from "@/models/users"
var CryptoJS = require("crypto-js");
import connectDb from "@/middleware/mongoose"
var jwt = require('jsonwebtoken');

const handler = async(req, res) => {
    if(req.method == 'POST'){
        console.log(req.body.fullName)
        let p = new users({
            fullName : req.body.fullName,
            email: req.body.email,
            phoneNo: req.body.phoneNo,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.secret_key).toString()
        })
        await p.save()
        var token = jwt.sign({name:req.body.fullName, email: req.body.email, phoneNo: req.body.phoneNo}, process.env.jwt_secret);
        res.status(200).json({success: true}, token)
        console.log("ho to gaya")
    }
    else{
        res.status(400).json({error: "This is not allowed"})
    }
}

export default connectDb(handler);

