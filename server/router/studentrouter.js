const express=require('express');
const router=new express.Router();
const studentschema=require('../schema/studentschema');
router.post('/student',async (req,res)=>{

const data=new studentschema(req.body);
if(data.firstName==='' || data.lastName===''){
    res.status(400).send('invalid data either first name or last name is empty');
    return;
}
const result=await data.save();
res.send(result);
})

module.exports=router;