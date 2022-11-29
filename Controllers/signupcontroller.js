import {UserModel} from "../database/model.js"
import Jwt  from "jsonwebtoken";
const Signupcontroller=async(req,res)=>{
   try{
       const validate=await UserModel.find({email:req.body.email});
       if(validate.length>0){
        res.json("user already exist")
       }else{
        const user=req.body;
        const adduser= new UserModel(user);
        await adduser.save();
        const token=Jwt.sign(
          {name:adduser.name,email:adduser.email},
          "this is my secret key of the year",
          {expiresIn:"30 day"}
        )
        res.json(token);
        console.log("user added successfullly");
       }
   }catch(err){
    console.log("error while adding user",err);
   }
}

export default Signupcontroller;