const mongoose = require('mongoose');
// const validator = require('validator');

const GarageOwnerSchema = new mongoose.Schema({
    BusinessName: {
        type: String,
        required: [true, 'Please enter FirstName']
    },
    BusinessRegistrationNumber: {
        type: String,
        required: [true, 'Please enter BusinessRegistrationNumber']
    },
    Location: {
        type: String,
        required: [true, 'Please enter Location']
    },
    PhoneNumber:{
        type:Number,
        required:[true, "please enter Phone Number"];
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
        default: "ShopOwner" 
    },
   
})


module.exports = mongoose.model('GarageOwnerdata', GarageOwnerSchema)