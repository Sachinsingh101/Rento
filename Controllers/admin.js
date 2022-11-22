import { rentModel } from "../database/model.js";

const adminController=async(req,res)=>{
   try{
    const id=req.body.value;
    const data=await rentModel.find({$text:{$search:id}});
    res.json(data);
   }catch(err){
    console.log("error while getting items",err);
   }
}
export default adminController;