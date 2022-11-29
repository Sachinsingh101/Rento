import { rentModel } from "../database/model.js"
import cloudinary from 'cloudinary'
import dotenv from 'dotenv'
dotenv.config();
cloudinary.config({ 
    cloud_name:process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_KEY, 
    api_secret:process.env.CLOUDINARY_SECRET 
  });

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
            const uploadtodb=new rentModel(data);
            uploadtodb.save();
            console.log("save to database sccessfully");
          });
    }catch(err){
        console.log(err);
    }
}
const deleteController=async(req,res)=>{
  try{
      const id=req.params.id;
      const item=await rentModel.findById(id);
      const image=item.imgurl;
      await cloudinary.v2.uploader.destroy(image).then((result)=>{
        console.log("image deleted from cloudinary successfully",result);
      })
      await rentModel.findByIdAndDelete(id);
      console.log('home deleted successfulll from database');
  }catch(err){
      console.log("error while deleting item");
  }
}


export {RenthomeController,deleteController};