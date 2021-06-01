
const mongoose = require('mongoose');


const admissionIntoUnitSchema = new mongoose.Schema({
    dateOfRegistration: {
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

    unitCode: {
        type: String,
        required: true
    },

    contributionCategory: {
        type: String,
        required: true
    },

    dateOfFirstDisbursment: {
        type: String,
        required: true
    },

    paymentMethod: {
        type: String,
        required: true
    }


})


module.exports = mongoose.model("admissionIntoUnit", admissionIntoUnitSchema)