

const Suscriber = require('../../../model/Management_team/Marketing_department/monthly_registration');




const editCustomerImage = async (req, res) => {
    try {

        let suscriber = await Suscriber.findById(req.params.id);
        suscriber.customerImagePath = req.file.path;
        await suscriber.save();
        console.log("customer image" + req.file.path)

    }
    catch (err) {
        res.status(500).json({
            errorMessage: " "
        })


    }

}


const editRef2Image = async (req, res) => {
    try {

        let suscriber = await Suscriber.findById(req.params.id);
        suscriber.referee2ImagePath = req.file.path;
        await suscriber.save();


        console.log("ref2 image" + req.file.path)


    }
    catch (err) {
        res.status(500).json({
            errorMessage: " "
        })


    }

}


const editRef1Image = async (req, res) => {
    try {


        let suscriber = await Suscriber.findById(req.params.id);
        suscriber.referee1ImagePath = req.file.path;
        await suscriber.save();



        console.log("ref1 image" + req.file.path)

    }
    catch (err) {
        res.status(500).json({
            errorMessage: " ."
        })


    }

}



const editMonthlySuscriber = async (req, res) => {
    try {

        let suscriber = await Suscriber.findById(req.params.id);

        suscriber.referalCode = req.body.referalCode,
            suscriber.branch = req.body.branch
        suscriber.formNo = req.body.formNo
        suscriber.fullName = req.body.fullName
        suscriber.residentialAddress = req.body.residentialAddress
        suscriber.email = req.body.email
        suscriber.phone = req.body.phone
        suscriber.occupation = req.body.occupation
        suscriber.maritalStatus = req.body.maritalStatus
        suscriber.religion = req.body.religion
        suscriber.gender = req.body.gender
        suscriber.birthday = req.body.birthday
        suscriber.permanentHomeAddress = req.body.permanentHomeAddress
        suscriber.stateOfOrigin = req.body.stateOfOrigin
        suscriber.LGA = req.body.LGA
        suscriber.homeTown = req.body.homeTown
        suscriber.prefferDaysOfMeeting = req.body.prefferDaysOfMeeting
        suscriber.contributionPlan = req.body.contributionPlan
        suscriber.bankName = req.body.bankName
        suscriber.accountNumber = req.body.accountNumber
        suscriber.BVN = req.body.BVN
        suscriber.meansOfIdentification = req.body.meansOfIdentification
        suscriber.idCardNo = req.body.idCardNo
        suscriber.kinFullname = req.body.kinFullname
        suscriber.kinAddress = req.body.kinAddress
        suscriber.kinEmail = req.body.kinEmail
        suscriber.kinPhone = req.body.kinPhone
        suscriber.kinOccupation = req.body.kinOccupation
        suscriber.kinOfficeAddress = req.body.kinOfficeAddress
        suscriber.kinRelationshipType = req.body.kinRelationshipType
        suscriber.kinYearOfrelationship = req.body.kinYearOfrelationship
        suscriber.referee1FullName = req.body.referee1FullName
        suscriber.referee1HomeAddress = req.body.referee1HomeAddress
        suscriber.referee1WorkAddress = req.body.referee1WorkAddress
        suscriber.referee1Business = req.body.referee1Business
        suscriber.referee1Email = req.body.referee1Email
        suscriber.referee1Religion = req.body.referee1Religion
        suscriber.referee1Phone = req.body.referee1Phone
        suscriber.referee1Relationship = req.body.referee1Relationship
        suscriber.referee2FullName = req.body.referee2FullName
        suscriber.referee2HomeAddress = req.body.referee2HomeAddress
        suscriber.referee2WorkAddress = req.body.referee2WorkAddress
        suscriber.referee2Business = req.body.referee2Business
        suscriber.referee2Email = req.body.referee2Email
        suscriber.referee2Religion = req.body.referee2Religion
        suscriber.referee2Phone = req.body.referee2Phone
        suscriber.referee2Relationship = req.body.referee2Relationship;
        await suscriber.save();

        return res.status(200).json({});

    }

    catch (err) {
        res.status(500).json({
            errorMessage: " error getting suscriber from database...."
        })

        console.log(err.message)
    }

}









module.exports = {
    editRef1Image,
    editRef2Image,
    editCustomerImage,
    editMonthlySuscriber,
}

