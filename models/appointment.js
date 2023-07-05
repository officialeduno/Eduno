const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNo: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    service: {
        type: String
    },
    timing: {
        type: String
    },
    location: {
        type: String
    }
}, {timestamps: true})

mongoose.models = {}
export default mongoose.model("Appointment", appointmentSchema)