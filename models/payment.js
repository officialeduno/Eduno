// Import mongoose from mongoose package
const mongoose = require ('mongoose');

// Create a schema for the user
const usersSchema = new mongoose.Schema({

    // First Name
    fullName : {
        type: String,
        required: true
    },

    // Email
    email : {
        type: String,
        required: true,
        unique: true
    },

    // Phone No
    phoneNo : {
        type: Number,
        required: true,
        unique: true
    },

    

    // Timestamp for record the time to user access
}, {timestamps: true})

// Create a model
mongoose.models = {}

// Export mongoose model or schema
export default mongoose.model("payment", usersSchema);