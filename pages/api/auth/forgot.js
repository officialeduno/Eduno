// Next.js API route support: http://localhost:3000/auth/forgot

// Import forgot schema from models
import connectDb from "@/middleware/mongoose";

// Import user schema
import users from "@/models/users";

// Use JWT to authenticate the token
var jwt = require('jsonwebtoken');

var nodemailer = require('nodemailer');

// Handler to use for middleware
const handler = async (req, res) => {

    // POSR method to call the API
    if (req.method == 'POST') {

        // Data of input form 
        const { email } = req.body;

        // Create a variable for defined the success of API and send back this
        let success = true;

        // Find the user of that email which is entered
        const user = await users.findOne({ email });

        // If user is not in database
        if (!user) {
            success = false;
            return res.status(400).json({ success, error: "User does not found" });
        }

        // If user exists in database
        else {
            const secret = process.env.secret_key + user.password;

            const forgot_token = jwt.sign({ email: user.email, id: user._id }, secret, { expiresIn: "5m" });

            const forgot_link = `${process.env.localhost}authentication/resetpassword?userid=${user._id}&token=${forgot_token}`;

            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'officialeduno@gmail.com',
                    pass: "cxcyvqmqkgchudxi"
                }
            });

            var mailOptions = {
                from: 'officialeduno@gmail.com',
                to: email,
                subject: 'Reset your Password',
                text: `
Dear ${user.firstName},

We have received a request to reset your password. If you did not initiate this request, please ignore this email.
                
To reset your password, please click on the following link and valid for 5 minutes:
"${forgot_link}"
                
You will be directed to a page where you can create a new password. Please ensure that your new password is at least eight characters long and includes a combination of uppercase and lowercase letters, numbers, and special characters.
                
If you experience any difficulties resetting your password, please do not hesitate to contact our support team for assistance.
                
Thank you for choosing our platform.
                
Best regards,
Eduno (Empower yourself with Eduno)`
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
    }
    else {
        res.status(400).json({ error: "This is not allowed" });
    }


}

export default connectDb(handler);