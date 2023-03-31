// Import mongoose from mongoose package
const mongoose = require ('mongoose');

// Create a schema for the user
const ForgotSchema = new mongoose.Schema({

    userId: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    token: {
        type: String,
        required: true
    }

    // Timestamp for record the time to user access
}, {timestamps: true})

// Create a model
mongoose.models = {}

// Export mongoose model or schema
export default mongoose.model("Forgot", ForgotSchema);