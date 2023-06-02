import users from "@/models/users"
import connectDb from "@/middleware/mongoose"

var jwt = require('jsonwebtoken');
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let success = true;
        const { email, password } = req.body;
        const user = await users.findOne({ email });
        if (!user) {
            success = false;
            return res.status(400).json({ success, error: "Invalid credentials" });
        } else {
            const bytes = CryptoJS.AES.decrypt(user.password, process.env.secret_key);
            let decryptedPass = bytes.toString(CryptoJS.enc.Utf8);
            if (password !== decryptedPass) {
                success = false;
                return res.status(400).json(success, { error: "Invalid Crendentials" });
            } else {
                var token = jwt.sign({ email: user.email, name: user.firstName }, process.env.jwt_secret);
                return res.status(200).json({ success, token, userName: user.firstName, edunoId: user.edunoId });
            }
        }
    } else {
        res.status(400).json({ error: "This is not allowed" });
    }
}

export default connectDb(handler);