const express= require('express');
const router = new express.Router();
const timeschema= require('../schema/worktime');
router.post('/time',async (req,res)=>{
    const data= new timeschema(req.body);
    const result=await data.save();
    res.send(result);
})
module.exports=router;