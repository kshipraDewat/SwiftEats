import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://kshipradewat66:kshipradewat66@cluster0.bp9pi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/test')
    .then(()=>console.log("DB Connected"));
   
}
