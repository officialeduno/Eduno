import connectDb from "@/middleware/mongoose";
import users from "@/models/users";

var jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');

const handler = async (req, res) => {
    if (req.method == 'POST') {
        const { email } = req.body;
        let success = true;
        const user = await users.findOne({ email });
        if (!user) {
            success = false;
            return res.status(400).json({ success, error: "User does not found" });
        } else {
            const secret = process.env.secret_key + user.password;
            const forgot_token = jwt.sign({ email: user.email, id: user._id }, secret, { expiresIn: "15m" });
            const forgot_link = `http://localhost:3000/authentication/resetpassword?userid=${user._id}&token=${forgot_token}`;
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'officialeduno@gmail.com',
                    pass: "cxcyvqmqkgchudxi"
                }
            });
            const email_message = `
Dear ${user.firstName},

We have received a request to reset your password. If you did not initiate this request, please ignore this email.
                            
To reset your password, please click on the following link and valid for 5 minutes:
"${forgot_link}"
                            
You will be directed to a page where you can create a new password. Please ensure that your new password is at least eight characters long and includes a combination of uppercase and lowercase letters, numbers, and special characters.
                            
If you experience any difficulties resetting your password, please do not hesitate to contact our support team for assistance.
                            
Thank you for choosing our platform.
                            
Best regards,
Eduno (Empower yourself with Eduno)`;
            var mailOptions = {
                from: 'officialeduno@gmail.com',
                to: email,
                subject: 'Reset your Password',
                text: email_message
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            return res.status(200).json({ success, forgot_link });
        }
    } else {
        res.status(400).json({ error: "This is not allowed" });
    }
}

export default connectDb(handler);