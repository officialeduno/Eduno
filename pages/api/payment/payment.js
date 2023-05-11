import payment from "@/models/payment"

// Import middleware to connect with the databse
import connectDb from "@/middleware/mongoose"

// Handler to use for middleware
const handler = async (req, res) => {

    // POST method to call the API
    if (req.method == 'POST') {

        let success = true;

        let user_payment = new payment({
            fullName : req.body.fullName,
            email : req.body.email,
            phoneNo : req.body.phoneNo,
            whatsappNo : req.body.whatsappNo
        })

        await user_payment.save();
        
        res.status(200).json({success: true});
    }

    // If API do not call properly
    else {
        res.status(400).json({ error: "This is not allowed" })
    }
}


// Export the connecct DB with handler
export default connectDb(handler);