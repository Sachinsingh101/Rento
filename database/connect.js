
import mongoose from "mongoose"

const connection= async (DATABASE_URL)=>{
   try{
    const dbname={
        dbname:"Rento"
    }
    await mongoose.connect(DATABASE_URL,dbname);
    console.log("database connected successfully");
   }catch(err){
    console.log("error while connecting to database",err);
   }
}

export default connection;