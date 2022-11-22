import { rentModel } from "../database/model.js"

const Getdatacontroller=async(req,res)=>{
    try{
        const data= await rentModel.find().limit(5)
        res.json(data);
        console.log("data fetched successfully");
    }catch(err){
        console.log("error while fetching data");
    }
}

export default Getdatacontroller;