const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    edunoId: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNo: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    education: {
        type: String
    },
    profession: {
        type: String
    },
    linkedin: {
        type: String
    },
    github: {
        type: String
    }
}, { timestamps: true })

mongoose.models = {}
export default mongoose.model("Users", usersSchema);