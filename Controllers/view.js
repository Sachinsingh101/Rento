import { rentModel } from "../database/model.js"

const viewcontroller=async(req,res)=>{
    try{
        const id=req.params.id
        const data=await rentModel.findById(id);
        res.json(data);
        console.log("single home fetched succssfully");
    }catch(err){
        console.log("error while fetching single home",err);
    }
}
export default viewcontroller;