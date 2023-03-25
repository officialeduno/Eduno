// Import user models from models sections
import users from "@/models/users"

// Import middleware to connect with the databse
import connectDb from "@/middleware/mongoose"

// Use JWT(JSON Web Token) to authenticate of user
var jwt = require('jsonwebtoken');

// Use cryptojs for decrypt the password
var CryptoJS = require("crypto-js");

// Handler to use for middleware
const handler = async (req, res) => {

    // POST method to call the API
    if (req.method == 'POST') {

        // Data of input form
        const { email, password } = req.body;

        // create a variable for defined the succes of API and send back this
        let success = true;

        // Find the user of that email which is entered
        const user = await users.findOne({ email });

        // If user is not in database then reject
        if (!user) {
            success = false;
            return res.status(400).json({ success, error: "Invalid credentials" });
        } 
        
        // If user exists in database
        else {

            // decrypt the password
            const bytes = CryptoJS.AES.decrypt(user.password, process.env.secret_key);
            let decryptedPass = bytes.toString(CryptoJS.enc.Utf8);

            // Match the given password and database password

            // If password not match then reject
            if (password !== decryptedPass) {
                success = false;
                return res.status(400).json(success, { error: "Invalid Crendentials" });
            }

            // If password match then continue
            else{

                // create a token for login time section
                var token = jwt.sign({email:user.email, name:user.fullName}, process.env.jwt_secret);
                return res.status(200).json({success, token});
            }
        }
    }

    // If API do not call properly
    else {
        res.status(400).json({ error: "This is not allowed" })
    }
}


// Export the connecct DB with handler
export default connectDb(handler);