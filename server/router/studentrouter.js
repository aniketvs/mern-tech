const express=require('express');
const router=new express.Router();
const studentschema=require('../schema/studentschema');
router.post('/student',async (req,res)=>{
const data=new studentschema(req.body);
const result=await data.save();
res.send(result);
})

module.exports=router;