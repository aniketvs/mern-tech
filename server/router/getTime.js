const express=require('express');
const router=new express.Router();
const studentschema=require('../schema/studentschema');
const timeschema= require('../schema/worktime');
router.get('/gettime',async ( req,res)=>{
const data=await studentschema.find();

data.forEach(async (student) =>{
  const timedata = await timeschema.find({student:student._id});
  console.log(`${student.firstName} ${student.lastName} time entery is `);
  
  console.log(`time entry ${timedata}`);
})
res.send(data);

});

module.exports=router;