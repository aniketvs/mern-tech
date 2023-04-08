
const fs=require('fs');
const path=require('path');
const dirpath=path.join(__dirname);

// for(let i=1;i<5;i++){
//    fs.writeFileSync(`${dirpath}/temp${i}file.txt`,`my file name is ${i}`);
// }
const getname=()=>{
fs.readdir(dirpath,(err,files)=>{
if(err){
    console.log(err);
    return;
}
files.forEach((item)=>{
    console.warn(item);
})
})
}
module.exports=getname;

