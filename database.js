import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.set("strictQuery", false);
    mongoose
        .connect(process.env.MONGODB_URL)
        .then(() => console.log("Successfully connected to the database"));
}
