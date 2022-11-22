import { rentModel } from "../database/model.js"
const RenthomeController=async(req,res)=>{
    try{
        const rentdata=req.body;
        const data={
            housename:rentdata.housename,
            houseaddress:rentdata.houseaddress,
            country:rentdata.country,
            state:rentdata.state,
            pincode:rentdata.pincode,
            type:rentdata.type,
            image:req.file.filename
        }
        const addrentdata=rentModel(data);
        await addrentdata.save();
        console.log("rent addedd sucessfully");
    }catch(err){
        console.log("error while adding rent",err);
    }
}

export default RenthomeController;