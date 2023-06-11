import users from "@/models/users";
import user_courses from "@/models/user_courses";
import connectDb from "@/middleware/mongoose"

var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler = async (req, res) => {
    if (req.method == 'POST') {
        const alreadyEmail = await users.findOne({ email: req.body.email });
        if (!alreadyEmail) {
            const alreadyPhone = await users.findOne({ phoneNo: req.body.phoneNo });
            if (!alreadyPhone) {
                let new_user = new users({
                    edunoId: req.body.edunoId,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    phoneNo: req.body.phoneNo,
                    password: CryptoJS.AES.encrypt(req.body.password, process.env.secret_key).toString(),
                    bio:"",
                    education:"",
                    profession:"",
                    linkedin:"",
                    github:""
                });
                await new_user.save();
                let user_course = new user_courses({
                    edunoId: req.body.edunoId,
                    courses: []
                })
                await user_course.save();
                var token = jwt.sign({ firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, phoneNo: req.body.phoneNo }, process.env.jwt_secret);
                res.status(200).json({ success: true, token, userName: req.body.firstName, edunoId: req.body.edunoId });
            } else {
                return res.status(400).json({ success: false, error: "Phone Number already exists." });
            }
        } else {
            return res.status(400).json({ success: false, error: "User already exists." });
        }
    } else {
        res.status(400).json({ success: false, error: "This is not allowed" });
    }
}

export default connectDb(handler);

