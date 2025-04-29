import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://shubham:96173683@cluster0.9s1o4dr.mongodb.net/food-del')
  .then(()=>{
    console.log('DB Connected');
  }) 
}