
import Jwt from 'jsonwebtoken'
const loginvalidator=async(req,res,next)=>{
    try{
        const token=req.headers.authorization;
        if(!token){
            return res.json({msg:"Authorization denied"})
        }
        else{
            Jwt.verify(token,"this is my secret key of the year",(error,decoded)=>{
                if(error){
                    return res.json({msg:'Authorization denied'});
                }else{
                    req.email=decoded.email;
                    console.log(token)
                    next();
                }
            })
        }
        
    }catch(err){
        console.log("something wrong with auth middleware",err);
    }
}

const adminValidator=async(req,res,next)=>{
    try{
        const token=req.headers.authorization;
        if(!token){
            return res.json({msg:"Authorization denied"})
        }
        else{
            Jwt.verify(token,"this is my secret key of the year",(error,decoded)=>{
                const decode=Jwt.decode(token,"this is my secret key of the year");
                if(error){
                    return res.json({msg:'Authorization denied'});
                }else if(decode.name==='Sachin' && decode.email==='sachinkumarsingh51110@gmail.com'){
                     next();
                }else{
                    return res.json({msg:"Authorization denied"});
                }
            })
        }
        
    }catch(err){
        console.log("something wrong with auth middleware",err);
    }
}
export { loginvalidator , adminValidator};