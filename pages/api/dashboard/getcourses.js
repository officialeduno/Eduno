import user_courses from "@/models/user_courses";
import connectDb from "@/middleware/mongoose"

const handler = async (req, res) => {
    if (req.method == 'GET') {
        const edunoId = req.body.edunoId;
        const user = await user_courses.findOne({edunoId});
        if(!edunoId){
            return res.status(200).json({success: true, courses: user.courses});
        } else{
            return res.status(200).json({success: false, error: "You are not in the database"})
        }
        
    } else {
        res.status(400).json({ error: "This is not allowed" });
    }
}


export default connectDb(handler);