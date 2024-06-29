import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://nimbal2003anish:741852963@cluster0.wzitkyt.mongodb.net/Food_App').then(()=>console.log("DB connected"))
}