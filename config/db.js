import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Emran_dev:wMPSF369d9TznubK@cluster0.5xewomm.mongodb.net/food-swap').then(()=>console.log("DB connected"));
}