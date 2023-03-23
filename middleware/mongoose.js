// Import Mongoose from mongoose package
import mongoose from "mongoose";

// Create a object to connect with the database
const connectDb = handler => async(req, res) => {

    // If database is already connected
    if(mongoose.connections[0].readyState){
        return handler(req, res)
    }

    // If database is not connected then connect
    await mongoose.connect(process.env.MONGO_URI)   // MONGO_URI --> Link of the database
    return handler(req, res);
}

// Export the object to help to connect the database
export default connectDb;