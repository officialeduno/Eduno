// import user models from models section
import users from "@/models/users"

// Use cryptoJS for encrypt the password
var CryptoJS = require("crypto-js");

// Import middleware to connect with the database
import connectDb from "@/middleware/mongoose"

// Use JWT(JSON web token) to authentication of user
var jwt = require('jsonwebtoken');

// handler to use for middleware
const handler = async(req, res) => {

    // POST method to call the API
    if(req.method == 'POST'){

        // Variable to store the details which is given to API
        let new_user = new users({
            fullName : req.body.fullName,
            email: req.body.email,
            phoneNo: req.body.phoneNo,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.secret_key).toString()
        })

        // Save the new user in Database
        await new_user.save()

        // Create a token for authentication of user
        var token = jwt.sign({name:req.body.fullName, email: req.body.email, phoneNo: req.body.phoneNo}, process.env.jwt_secret);

        // return this if succesfylly save in database
        res.status(200).json({success: true}, token)
    }

    // If API does not call properly
    else{

        // return this if API doesn't call
        res.status(400).json({error: "This is not allowed"})
    }
}

// Export the connect DB with handler
export default connectDb(handler);

