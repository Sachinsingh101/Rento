import { rentModel } from "../database/model.js";

const Userchoicecontroller =async(req,res)=>{
    try{
       const id=req.params.id;
       const data=await rentModel.find({$text:{$search:id}});
       res.json(data);
       console.log("specific rent fetched sucessfully",data);
    }catch(err){
        console.log("error while fetching specific rent",err);
    }
}
export default Userchoicecontroller;