import { applyModel } from "../database/model.js";

const appliedHandler=async(req,res)=>{
  try{
    const data=await applyModel.find();
    res.json(data);
  }catch(err){
    console.log("error while getting applied users");
  }
}

export default appliedHandler;