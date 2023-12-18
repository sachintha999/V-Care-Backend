const mongoose = require('mongoose');
// const validator = require('validator');

const BuyerSellerSchema = new mongoose.Schema({
    UserName: {
        type: String,
        required: [true, 'Please enter UserName']
    },
    City: {
        type: String,
        required: [true, 'Please enter City']
    },
    PhoneNumber:{
        type:Number,
        required:[true, "please enter Phone Number"];
        unique:true
    },
    UserType: {
        type: String,
        required: [true, 'Please enter UserType'],  
    },
    Password: {
        type: String,
        required: [true, 'Please enter Password'],
        unique:true
    },
   
   
})


module.exports = mongoose.model('BuyerSellerData', BuyerSellerSchema)