
const mongoose = require ('mongoose');

const paymentSchema = new mongoose.Schema({

    edunoId : {
        type: String,
        required: true,
        unique: true
    },

    fullName : {
        type: String,
        required: true
    },

    email : {
        type: String,
        required: true,
        unique: true
    },

    phoneNo : {
        type: Number,
        required: true,
        unique: true
    },
    whatsappNo : {
        type: Number,
        required: true,
        unique: true
    },
    course : {
        type: String,
        required : true
    }

}, {timestamps: true})

mongoose.models = {}

export default mongoose.model("payment", paymentSchema);