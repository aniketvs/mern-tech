// file name fetch
const fileName=require('./filefetch');
fileName();

const express=require('express');
const app=express();

// for parsing a data
app.use(express.json());

// config file

require('./config/config');

// student post router
const studentRouter = require('./router/studentrouter');
app.use(studentRouter);

// work time schema

const timeRouter =  require('./router/timeschema');
app.use(timeRouter);


// get time entries

const getTimeRouter = require('./router/getTime');

app.use(getTimeRouter);




// port listening
const PORT=5000;
app.listen(PORT,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('server is listening on port-',PORT);

})