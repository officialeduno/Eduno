// import user models from models section
import users from "@/models/users"

// Use cryptoJS for encrypt the password
var CryptoJS = require("crypto-js");

// Import middleware to connect with the database
import connectDb from "@/middleware/mongoose"

// Use JWT(JSON web token) to authentication of user
var jwt = require('jsonwebtoken');

// handler to use for middleware
const handler = async (req, res) => {

    // POST method to call the API
    if (req.method == 'POST') {

        // Check the email is it exists or not
        const alreadyEmail = await users.findOne({ email: req.body.email });

        // If email not exists in database then continue
        if (!alreadyEmail) {

            // Check the phone number is exists or not
            const alreadyPhone = await users.findOne({ phoneNo: req.body.phoneNo });

            // If phone number not exists in database
            if (!alreadyPhone) {
                // Variable to store the details which is given to API
                let new_user = new users({
                    fullName: req.body.fullName,
                    email: req.body.email,
                    phoneNo: req.body.phoneNo,
                    password: CryptoJS.AES.encrypt(req.body.password, process.env.secret_key).toString()
                })

                // Save the new user in Database
                await new_user.save()

                // Create a token for authentication of user
                var token = jwt.sign({ name: req.body.fullName, email: req.body.email, phoneNo: req.body.phoneNo }, process.env.jwt_secret);

                // return this if succesfylly save in database
                res.status(200).json({ success: true }, token);

            }
            
            // If phone number already exists in database
            else{
                return res.status(400).json({success: false, error: "Phone Number already exists."})
            }
        } 
        
        // if email is already exsts in database
        else {
            return res.status(400).json({ success: false, error: "User already exists." });
        }
    }

    // If API does not call properly
    else {

        // return this if API doesn't call
        res.status(400).json({ success: false, error: "This is not allowed" })
    }
}

// Export the connect DB with handler
export default connectDb(handler);

