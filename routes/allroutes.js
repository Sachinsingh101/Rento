import express from "express";
const router=express.Router();
import renthomeController from '../Controllers/rent.js'
import upload from '../auth/multer.js'
import {loginvalidator} from '../auth/auth.js'
router.get('/rent',loginvalidator,(req,res)=>{
    console.log("login varified");
})
router.post('/renthome',upload.single("image"),renthomeController);

import Signupcontroller from '../Controllers/signupcontroller.js'
import Getdatacontroller from '../Controllers/getdata.js'
import Userchoicecontroller from '../Controllers/userchoicecontroller.js'
import viewcontroller from '../Controllers/view.js'
import Logincontroller from '../Controllers/login.js'
import adminController from '../Controllers/admin.js'
import deleteController from '../Controllers/deleteitem.js'
import applyHandler from '../Controllers/apply.js'
import appliedHandler from '../Controllers/applied.js'
import {adminValidator} from '../auth/auth.js'
import adminvalidatorController from '../Controllers/validateadmin.js'

router.post('/Signup',Signupcontroller);

router.get('/getdata',Getdatacontroller);

router.get('/validateadmin',adminValidator,adminvalidatorController);

router.get('/userchoice/:id',Userchoicecontroller);

router.get('/view/:id',viewcontroller);

router.post('/login',Logincontroller);

router.post('/admin',adminController)

router.delete('/delete/:id',deleteController);

router.post('/apply',applyHandler);

router.get('/getapplied',appliedHandler);

export default router;