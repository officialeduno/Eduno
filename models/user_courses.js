const mongoose = require('mongoose');

const userCoursesSchema = new mongoose.Schema({
    edunoId: {
        type: String,
        required: true,
        unique: true
    },
    courses : {
        type: Array
    }
}, { timestamps: true })

mongoose.models = {}
export default mongoose.model("User Courses", userCoursesSchema);