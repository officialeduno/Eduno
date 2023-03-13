import users from "@/models/users"
var CryptoJS = require("crypto-js");
import connectDb from "@/middleware/mongoose"

const handler = async(req, res) => {
    if(req.method == 'POST'){
        console.log(req.body.fullName)
        let p = new users({
            fullName : req.body.fullName,
            email: req.body.email,
            phoneNo: req.body.phoneNo,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.secret_key).toString()
        })
        console.log(p);
        await p.save()
        res.status(200).json({success: "Ho gaya"})
    }
    else{
        res.status(400).json({error: "This is not allowed"})
    }
}

export default connectDb(handler);

