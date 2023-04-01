// Import user models from models sections
import users from "@/models/users"

// Import middleware to connect with the databse
import connectDb from "@/middleware/mongoose"


// Handler to use for middleware
const handler = async (req, res) => {

    // POST method to call the API
    if (req.method == 'POST') {

        // Data of input form
        const { userId } = req.body;

        // create a variable for defined the succes of API and send back this
        let success = true;

        // Find the user of that email which is entered
        const user = await users.findById(userId).select("-password");

        if(!user){
            res.status(400).json({error: 'user does not found'})
        }else{
            res.status(200).json({user});
        }
        
    }

    // If API do not call properly
    else {
        res.status(400).json({ error: "This is not allowed" })
    }
}


// Export the connecct DB with handler
export default connectDb(handler);