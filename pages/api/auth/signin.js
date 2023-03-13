import users from "@/models/users"
import connectDb from "@/middleware/mongoose"

const handler = async(req, res) => {
    if(req.method == 'GET'){
        const {email, password} = req.body;

        let user = await users.findOne({email});
        if(!user){
            return res.status(400).json({error:"No Gmail found"});
        }

        if(user.password !== password){
            return res.status(400).json({error:"Wrong password"});
        }
        res.status(200).json({success: "Ho gaya"})
    }
    else{
        res.status(400).json({error: "This is not allowed"})
    }
}

export default connectDb(handler);