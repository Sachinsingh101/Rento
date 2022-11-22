import mongoose from "mongoose";
import uniqueValidator from 'mongoose-unique-validator'

const Userschema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String
    }
})
Userschema.plugin(uniqueValidator);

const UserModel= mongoose.model('users',Userschema);
const RentSchema=new mongoose.Schema({
    housename:{
        type:String
    },
    houseaddress:{
        type:String
    },
    country:{
        type:String
    },
    state:{
        type:String
    },
    pincod:{
        type:String
    },
    type:{
        type:String
    },
    image:{
        type:String
    }
})
const applySchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    housename:{
        type:String
    },
    houseaddress:{
        type:String
    },
    phone:{
        type:String
    }
})
const applyModel=mongoose.model('applied',applySchema);
const rentModel= mongoose.model('homelist',RentSchema)

RentSchema.index({housename:"text",houseaddress:'text',state:'text',type:'text',pincode:'text'});

export  {UserModel , rentModel ,applyModel}