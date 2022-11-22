import { rentModel } from "../database/model.js";
import fs from 'fs'
const deleteController=async(req,res)=>{
    try{
        const id=req.params.id;
        const item=await rentModel.findById(id);
        const imgurl=item.image;
        fs.unlinkSync(`public/${imgurl}`)
        await rentModel.findByIdAndDelete(id);
        console.log('deleted successfulll');
    }catch(err){
        console.log("error while deleting item");
    }
}

export default deleteController;