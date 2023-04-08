const mongoose=require('mongoose');

const Schema=mongoose.Schema;
const studentModal=new Schema({
    firstName: {
        type: String,
        trim: true,
        default: '',
        validate(value){
            if(value==''){
                throw new Error( "firstname  is empty");
            }
        }
        },
        lastName: {
        type: String,
        trim: true,
        default: '',
        validate(value){
            if(value==''){
                throw new Error( "lastname is empty");
            }
        }
     },
        displayName: {
        type: String,
        trim: true
        },
        municipality: {
        type: String
        }
});

module.exports=mongoose.model('student',studentModal);