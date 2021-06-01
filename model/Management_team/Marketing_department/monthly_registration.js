
/*model*/

const Mongoose = require('mongoose');



/**
branch
stateCode
unitCode
formNo
 fullName
residentialAddress
email
phone
occupation
maritalStatus
religion
gender
birthday
permanentHomeAddress
stateOfOrigin
LGA

homeTown
prefferDaysOfMeeting
contributionPlan
bankName
accountNumber
BVN
meansOfIdentification
idCardNo
kinFullname:
kinAddress:
kinEmail:
kinPhone:
kinOccupation:
kinOfficeAddress:
kinRelationshipType:   
kinYearOfrelationship:


 educationalBackground: {
        certificate: 
        nameOfSchool: 
        startYear: 
        graduationYear:
        otherProfessionalQualification: 
        
    },

employementExperience: {
        companyEmployerName:      
        position:     
        duties: 
        realmOrLevel:  
        presentJob: 
        previousJob: 
        startedFrom: 
        ended: 
    },


    refreeFullName1: 
    refreeAddress1: 
    refreePlaceOfWork1: 
    refreeOccupation1: 
    refreeEmail1: 
    refreePhone1: 
    refreeReligion1: 
    refreeRelationship1: 


    refreeFullName2: 
    refreeAddress2: 
    refreePlaceOfWork2: 
    refreeOccupation2: 
    refreeEmail2: 
    refreePhone2: 
    refreeReligion2: 
    refreeRelationship2: 



    referalFullName: 
    referalCode: 
    referalDateOfAdmission: 
    referalUnitSecretary: 
    referalUnitChairman: 
  




 */

const monthlyRegistrationSchema = new Mongoose.Schema({
    branch: {
        type: String,
        required: true
    },

    stateCode: {
        type: String,
        required: true
    },

  
    unitCode: {
        type: String,
        required: true
    },

    formNo: {
        type: String,
        required: true
    },


    /*personal information */
    

    customerImage: {
        type: Buffer,
    },


    fullName: {
        type: String,
        required: true
    },

    residentialAddress: {
        type: String,
        required: true
    },

    email: {
        type: String,
        
    },
    phone: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },

    maritalStatus: {
        type: String,
        required: true
    },

    religion: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    birthday: {
        type: String,
        required: true
    },


    permanentHomeAddress: {
        type: String,
        required: true
    },

    stateOfOrigin: {
        type: String,
        required: true
    },

    LGA: {
        type: String,
        required: true
    },

    homeTown: {
        type: String,
        required: true
    },

    prefferDaysOfMeeting: {
        type: String,

    },

    contributionPlan: {
        type: String,
        required: true
    },


    /* bank details */
    bankName: {
        type: String,
        required: true
    },

    accountNumber: {
        type: String,
        required: true
    },

    BVN: {
        type: String,
        required: true
    },


    meansOfIdentification: {
        type: String,
        required: true
    },

    idCardNo: {
        type: String,
        required: true
    },

    /* SPOUSE or  next of kin infotmation*/
    kinFullname: {
        type: String,
        required: true
    },

    kinAddress: {
        type: String,
        required: true
    },

    kinEmail: {
        type: String,
        required: true
    },

    kinPhone: {
        type: String,
        required: true
    },

    kinOccupation: {
        type: String,
        required: true
    },

    kinOfficeAddress: {
        type: String,
        required: true
    },

    kinRelationshipType: {
        type: String,
        required: true
    },

    kinYearOfrelationship: {
        type: String,
        required: true
    },


    /* education background */
    educationalBackground: {

        certificate: {
            type: String,
        },
        nameOfSchool: {
            type: String,
        },
        startYear: {
            type: String,
        },
        graduationYear: {
            type: String,
        },
        otherProfessionalQualification: {
            type: String,
        },
    },



    /* employement experience */


    employementExperience: {

        companyEmployerName: {
            type: String,

        },
        position: {
            type: String,

        },
        duties: {
            type: String,

        },
        realmOrLevel: {
            type: String,

        },
        presentJob: {
            type: String,

        },
        previousJob: {
            type: String,

        },
        startedFrom: {
            type: String
        },

        ended: {
            type: String
        },



    },



    /* refree details */

    refreeImage1: {
        type: Buffer,
    },

    refreeFullName1: {
        type: String,
        required: true
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
        required: true
    },

    refreeReligion1: {
        type: String,

    },

    refreeRelationship1: {
        type: String,

    },

    //refree 2////////////////////////////

    refreeImage2: {
        type: Buffer,
    },

    refreeFullName2: {
        type: String,
        required: true
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
        required: true
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