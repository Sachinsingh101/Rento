import { rentModel } from "../database/model.js"
import cloudinary from 'cloudinary'
import dotenv from 'dotenv'
dotenv.config();
cloudinary.config({ 
    cloud_name:process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_KEY, 
    api_secret:process.env.CLOUDINARY_SECRET 
  });

//   let imgurl="";

// const Uploadimg=async(req,res)=>{
//     try{
//         const result= await cloudinary.uploader.upload(req.files.image.path);
//         imgurl=result.url
//         console.log(req.files)
//         console.log("image added successfully");
//     }catch(err){
//         console.log("error while adding image to cloudinary",err);
//     }



const RenthomeController=async(req,res)=>{
    try{
          const file=req.file;
          console.log(file);
          await cloudinary.v2.uploader.upload(file.path).then((result)=>{
            const url=result.url;
            console.log(" image uploaded successfully");
            const data={
                housename:req.body.housename,
                houseaddress:req.body.houseaddress, 
                country:req.body.country,
                state:req.body.state,
                pincode:req.body.pincode,
                type:req.body.type,
                imgurl:url
            };
            console.log(data)
            const uploadtodb=new rentModel(data);
            uploadtodb.save();
            console.log("save to database sccessfully");
          });
    }catch(err){
        console.log(err);
    }
}


export default RenthomeController;