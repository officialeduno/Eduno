import users from "@/models/users"
import connectDb from "@/middleware/mongoose"

var CryptoJS = require("crypto-js");

const handler = async(req, res) => {
    if(req.method == 'GET'){
        const {email, password} = req.body;

        let user = await users.findOne({email});
        if(!user){
            return res.status(400).json({error:"No Gmail found"});
        }

        const bytes = CryptoJS.AES.decrypt(user.password, process.env.secret_key);
        let decryptedPass = bytes.toString(CryptoJS.enc.Utf8)

        if(password !== decryptedPass){
            console.log(password);
            console.log(decryptedPass);
            return res.status(400).json({error:"Wrong password"});
        }
        res.status(200).json({success: "Ho gaya"})
    }
    else{
        res.status(400).json({error: "This is not allowed"})
    }
}

export default connectDb(handler);