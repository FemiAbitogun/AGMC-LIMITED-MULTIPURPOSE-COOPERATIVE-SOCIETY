
const mongoose = require('mongoose');


const dailyContributionSchema = new mongoose.Schema({
    cardNo: {
        type: String,
        required: true
    },

    fullName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },

    amount: {//500,1000,1500,2000
        type: String,
        required: true
    },

    zone: {
        type: String,
        required: true
    },

    referralCode: {
        type: String,
        required: true
    },

   

})


module.exports = mongoose.model("dailyContribution", dailyContributionSchema)