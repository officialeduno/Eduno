// Import mongoose from mongoose package
const mongoose = require ('mongoose');

// Create a schema for the user
const usersSchema = new mongoose.Schema({

    // First Name
    firstName : {
        type: String,
        required: true
    },

    // Last Name
    lastName : {
        type: String
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

    // Password
    password : {
        type: String,
        required: true
    }

    // Timestamp for record the time to user access
}, {timestamps: true})

// Create a model
mongoose.models = {}

// Export mongoose model or schema
export default mongoose.model("Users", usersSchema);