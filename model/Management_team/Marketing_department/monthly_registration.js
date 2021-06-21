
/*model*/
const Mongoose = require('mongoose');


const monthlyRegistrationSchema = new Mongoose.Schema({


    referalCode: {
        type: String,
    },

    customerImagePath: {
        type: String,
    },

    branch: {
        type: String,
    },

    formNo: {
        type: String,
    },
    /*personal information */
    fullName: {
        type: String,
    },

    residentialAddress: {
        type: String,
    },

    email: {
        type: String,

    },
    phone: {
        type: String,
    },
    occupation: {
        type: String,
    },

    maritalStatus: {
        type: String,
    },

    religion: {
        type: String,
    },

    gender: {
        type: String,
    },

    birthday: {
        type: String,
    },


    permanentHomeAddress: {
        type: String,
    },

    stateOfOrigin: {
        type: String,
    },

    LGA: {
        type: String,
    },

    homeTown: {
        type: String,
    },

    // section b.................

    prefferDaysOfMeeting: {
        type: String,

    },

    contributionPlan: {
        type: String,
    },


    /* bank details */
    bankName: {
        type: String,
    },

    accountNumber: {
        type: String,
    },

    BVN: {
        type: String,
    },


    meansOfIdentification: {
        type: String,
    },

    idCardNo: {
        type: String,
    },



    //SECTION D  /* SPOUSE or  next of kin infotmation*/

    kinFullname: {
        type: String,
    },

    kinAddress: {
        type: String,
    },

    kinEmail: {
        type: String,
    },

    kinPhone: {
        type: String,
    },

    kinOccupation: {
        type: String,
    },

    kinOfficeAddress: {
        type: String,
    },

    kinRelationshipType: {
        type: String,
    },

    kinYearOfrelationship: {
        type: String,
    },


    //SECTION  C       /* refree details */



    refreeImage1: {
        type: Buffer,
    },

    refreeFullName1: {
        type: String,

    },

    refreeAddress1: {
        type: String,

    },

    refreePlaceOfWork1: {
        type: String,

    },
    refreeOccupation1: {
        type: String,

    },

    refreeEmail1: {
        type: String,

    },
    refreePhone1: {
        type: String,
    },

    refreeReligion1: {
        type: String,

    },

    refreeRelationship1: {
        type: String,

    },

    //refree 2

    refreeImage2: {
        type: Buffer,
    },

    refreeFullName2: {
        type: String,
    },

    refreeAddress2: {
        type: String,

    },

    refreePlaceOfWork2: {
        type: String,

    },
    refreeOccupation2: {
        type: String,
    },

    refreeEmail2: {
        type: String,

    },
    refreePhone2: {
        type: String,
    },

    refreeReligion2: {
        type: String,

    },

    refreeRelationship2: {
        type: String,

    },


    /* office use only */

    referalFullName: {
        type: String,

    },

    referalCode: {
        type: String,

    },


    referalDateOfAdmission: {
        type: String,

    },


    referalUnitSecretary: {
        type: String,

    },

    referalUnitChairman: {
        type: String,

    },




})

module.exports = Mongoose.model("monthlyRegistration", monthlyRegistrationSchema);