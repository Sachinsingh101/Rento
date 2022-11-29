import { UserModel } from "../database/model.js"
import Jwt from "jsonwebtoken"
const Logincontroller=async(req,res)=>{
    try{
        const user=await UserModel.find({email:req.body.email})
        if(user.length>=1){
            const token=Jwt.sign(
                {name:req.body.name,email:req.body.email},
                "this is my secret key of the year",
                {expiresIn:"30 day"}
            )
            res.json(token);
        }else{
            res.json("user not found");
        }
    }catch(err){
        console.log("error while validating user",err);
    }
}

export default Logincontroller;