const Mongoose = require('mongoose');
const DB='mongodb://127.0.0.1:27017/portfolio';
 Mongoose.connect(DB).then(()=>{
    console.log('db is connected')
}).catch((err)=>{
    console.log("error is found",err);
})