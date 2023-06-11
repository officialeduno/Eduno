import users from "@/models/users";
import connectDb from "@/middleware/mongoose"

const handler = async (req, res) => {
    if (req.method == 'POST') {
        const edunoId = req.body.edunoId;
        const user = await users.findOne({edunoId});
        if(!user){
            return res.status(200).json({success: false, error: "You are not in the database"})
        } else{
            user.linkedin = req.body.linkedin;
            user.github = req.body.github;
            user.save();
            res.status(200).json({success: true});
        }
        
    } else {
        res.status(400).json({ error: "This is not allowed" });
    }
}


export default connectDb(handler);