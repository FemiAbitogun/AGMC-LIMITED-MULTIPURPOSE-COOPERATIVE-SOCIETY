
const mongoose = require('mongoose');

const financeSchema = new mongoose.Schema({
    no: {
        type: String,
        required: true
    },
    referralCode: {
        type: String,
        required: true
    },

    registrationNumber: {
        type: String,
        required: true
    },

    BVN: {
        type: String,
        required: true
    },

    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: true
    },

    bankName: {
        type: String,
        required: true
    },

    accountNumber: {
        type: String,
        required: true
    },


    phone: {
        type: String,
        required: true
    },

  

    contributionCategoryBeforeLoan: {
        type: String,
        required: true
    }
    ,
    totalAmountContributed: {
        type: String,
        required: true
    }
    , amountInWords: {
        type: String,
        required: true
    }
    ,
    amountOfLoanOrLoanRequestFigure: {
        type: String,
        required: true
    }
    ,



    amountInWordsOfRequestLoan: {
        type: String,
        required: true
    }
    ,



    isReligionSupportForLoan: {
        type: String,
        required: true
    },
    // yes or no............from above question
    isEligibilty: {
        type: String,
    }
    ,
    isCanMakeContributionWhileServicingLoan: {
        type: String,
    }
    ,



    
    //if yes......
    servicingLoanAmount: {
        type: String,

    },
    //if no........
    pickAmountOfLoanAfterRepayment: {
        type: String,
    },

    //referreal database

    referralFullName: {
        type: String,
    }
    ,


    

    //if yes......
    referralPhone: {
        type: String,

    },
    //if no........
    referralDateOfRegistration: {
        type: String,
    },

    referralDateOfAdmin: {
        type: String,
    },
    referralUnitCode: {
        type: String,
    },


})


module.exports = mongoose.model("finance", financeSchema);