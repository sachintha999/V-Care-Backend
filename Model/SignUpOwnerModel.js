const mongoose = require('mongoose');
// const validator = require('validator');

const OwnerSchema = new mongoose.Schema({
    OwnerName: {
        type: String,
        required: [true, 'Please enter FirstName']
    },
    Nic: {
        type: String,
        required: [true, 'Please enter Email']
    },
    PhoneNumber:{
        type: Number,
        required:[true, "please enter Phone Number"],
        unique:true
    },
    OwnerPassword: {
        type: String,
        required: [true, 'Please enter Password'],
        unique:true
    },
    UserType: {
        type: String,
        required: [true, 'Please enter UserType'], 
        default: "Owner" 
    },
   
})


module.exports = mongoose.model('OwnerData', OwnerSchema)