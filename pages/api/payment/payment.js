import payment from "@/models/payment"
import connectDb from "@/middleware/mongoose"

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let user_payment = new payment({
            edunoId : req.body.edunoId,
            fullName : req.body.fullName,
            email : req.body.email,
            phoneNo : req.body.phoneNo,
            whatsappNo : req.body.whatsappNo,
            course : req.body.course
        });
        await user_payment.save();
        res.status(200).json({success: true});
    } else {
        res.status(400).json({ error: "This is not allowed" });
    }
}


export default connectDb(handler);