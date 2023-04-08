const mongoose=require('mongoose');

const Schema=mongoose.Schema;
const studentModal=new Schema({
    firstName: {
        type: String,
        trim: true,
        default: ''
        // validate: [validateLocalStrategyProperty, 'Please fill in your first name']
        },
        lastName: {
        type: String,
        trim: true,
        default: ''
        // validate: [validateLocalStrategyProperty, 'Please fill in your last name']
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