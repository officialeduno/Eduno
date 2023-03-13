const mongoose = require ('mongoose');

const usersSchema = new mongoose.Schema({
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
    password : {
        type: String,
        required: true
    }
}, {timestamps: true})

mongoose.models = {}
export default mongoose.model("Users", usersSchema);