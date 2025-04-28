import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://SwadXpress:SwadXpress123@cluster0.xlltzza.mongodb.net/food-del');
        console.log("DB CONNECTED");
    } catch (error) {
        console.error("CONNECTION ERROR:", error);
        process.exit(1); // Exit process with failure
    }
};