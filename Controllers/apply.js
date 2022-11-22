import { applyModel } from "../database/model.js";
import { rentModel } from "../database/model.js";
import { UserModel } from "../database/model.js";
import Jwt from 'jsonwebtoken'
const applyHandler=async(req,res)=>{
   const id=req.body.id;
   const token=req.body.token;
   const decode=Jwt.decode(token,"this is my secret key of the year");
   const data=await rentModel.findById(id);
   const user=await UserModel.find({email:decode.email})
   const phone=user[0].phone
   try{
      const applydata={
         name:decode.name,email:decode.email,housename:data.housename,houseaddress:data.houseaddress,phone:phone
      }
      const apply= new applyModel(applydata);
      await apply.save();
      console.log("applied for home successfullly");
   }catch(err){
      console.log("error while appliying for home");
   }
}
export default applyHandler;