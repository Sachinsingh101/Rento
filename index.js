
import express from "express";
import cors from 'cors'
import bodyParser from "body-parser";
import dotenv  from 'dotenv'
import Router from './routes/allroutes.js'
import connection from "./database/connect.js";
dotenv.config()

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
const DATABASE_URL=process.env.DATABASE_URL

app.get('/',(req,res)=>{
    res.send("hello this is home page")
})

app.use('/public',express.static('public'))

app.use('/',Router);

connection(DATABASE_URL);
app.listen(process.env.PORT,()=>{
    console.log("app is listening to port 5000!!");
})