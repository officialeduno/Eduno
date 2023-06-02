
import users from "@/models/users"

import connectDb from "@/middleware/mongoose"


const handler = async (req, res) => {

    if (req.method == 'POST') {

        const { userId } = req.body;

        let success = true;

        const user = await users.findById(userId).select("-password");

        if(!user){
            res.status(400).json({error: 'user does not found'})
        }else{
            res.status(200).json({user});
        }
        
    }

    else {
        res.status(400).json({ error: "This is not allowed" })
    }
}


export default connectDb(handler);