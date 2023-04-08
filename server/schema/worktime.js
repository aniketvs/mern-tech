const mongoose= require('mongoose');
const workTimeSchema=mongoose.Schema;
const workTimeModel=new workTimeSchema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'student'
        },
        timeEntries: {
        type: Date,
        default: Date.now()
        }
        
});

module.exports=mongoose.model('time',workTimeModel);