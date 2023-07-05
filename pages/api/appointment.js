import appointment from "@/models/appointment";
import connectDb from "@/middleware/mongoose";

const handler = async(req, res) => {
    if(req.method == "POST"){
        let newAppointment = new appointment({
            name: req.body.name,
            phoneNo: req.body.phoneNo,
            address: req.body.address,
            service: req.body.service,
            timing: req.body.timing,
            location: req.body.location
        })
        await newAppointment.save()
        res.status(200).json({success: true, message: "Completed"})
    } else{
        res.status(400).json({success: false, error:"This is not allowed"})
    }
}

export default connectDb(handler);