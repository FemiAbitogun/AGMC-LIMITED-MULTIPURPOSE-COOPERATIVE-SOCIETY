

const Suscriber = require('../../../model/Management_team/Marketing_department/monthly_registration');



let _suscriber = new Suscriber();


const editMonthlySuscriber = async (req, res) => {
    try {

        const suscriber = await Suscriber.findById(req.params.id);

        let {
            referalCode,
            branch,
            formNo,
            fullName,
            residentialAddress,
            email,
            phone,
            occupation,
            maritalStatus,
            religion,
            gender,
            birthday,
            permanentHomeAddress,
            stateOfOrigin,
            LGA,
            homeTown,
            prefferDaysOfMeeting,
            contributionPlan,
            bankName,
            accountNumber,
            BVN,
            meansOfIdentification,
            idCardNo,
            kinFullname,
            kinAddress,
            kinEmail,
            kinPhone,
            kinOccupation,
            kinOfficeAddress,
            kinRelationshipType,
            kinYearOfrelationship,
            referee1FullName,
            referee1HomeAddress,
            referee1WorkAddress,
            referee1Business,
            referee1Email,
            referee1Religion,
            referee1Phone,
            referee1Relationship,
            referee2FullName,
            referee2HomeAddress,
            referee2WorkAddress,
            referee2Business,
            referee2Email,
            referee2Religion,
            referee2Phone,
            referee2Relationship

        } = req.body;

        suscriber.referalCode = referalCode,
            suscriber.branch = branch
        suscriber.formNo = formNo
        suscriber.fullName = fullName
        suscriber.residentialAddress = residentialAddress
        suscriber.email = email
        suscriber.phone = phone
        suscriber.occupation = occupation
        suscriber.maritalStatus = maritalStatus
        suscriber.religion = religion
        suscriber.gender = gender
        suscriber.birthday = birthday
        suscriber.permanentHomeAddress = permanentHomeAddress
        suscriber.stateOfOrigin = stateOfOrigin
        suscriber.LGA = LGA
        suscriber.homeTown = homeTown
        suscriber.prefferDaysOfMeeting = prefferDaysOfMeeting
        suscriber.contributionPlan = contributionPlan
        suscriber.bankName = bankName
        suscriber.accountNumber = accountNumber
        suscriber.BVN = BVN
        suscriber.meansOfIdentification = meansOfIdentification
        suscriber.idCardNo = idCardNo
        suscriber.kinFullname = kinFullname
        suscriber.kinAddress = kinAddress
        suscriber.kinEmail = kinEmail
        suscriber.kinPhone = kinPhone
        suscriber.kinOccupation = kinOccupation
        suscriber.kinOfficeAddress = kinOfficeAddress
        suscriber.kinRelationshipType = kinRelationshipType
        suscriber.kinYearOfrelationship = kinYearOfrelationship
        suscriber.referee1FullName = referee1FullName
        suscriber.referee1HomeAddress = referee1HomeAddress
        suscriber.referee1WorkAddress = referee1WorkAddress
        suscriber.referee1Business = referee1Business
        suscriber.referee1Email = referee1Email
        suscriber.referee1Religion = referee1Religion
        suscriber.referee1Phone = referee1Phone
        suscriber.referee1Relationship = referee1Relationship
        suscriber.referee2FullName = referee2FullName
        suscriber.referee2HomeAddress = referee2HomeAddress
        suscriber.referee2WorkAddress = referee2WorkAddress
        suscriber.referee2Business = referee2Business
        suscriber.referee2Email = referee2Email
        suscriber.referee2Religion = referee2Religion
        suscriber.referee2Phone = referee2Phone
        suscriber.referee2Relationship = referee2Relationship;

        if (_suscriber.customerImagePath !== "" || _suscriber.customerImagePath !== null) {
            suscriber.customerImagePath = _suscriber.customerImagePath;
        }

        if (_suscriber.referee2ImagePath !== "" || _suscriber.referee2ImagePath !== null) {
            suscriber.referee2ImagePath = _suscriber.referee2ImagePath
        }

        if (_suscriber.referee1ImagePath !== "" || _suscriber.referee1ImagePath !== null) {
            suscriber.referee1ImagePath = _suscriber.referee1ImagePath
        }


        const editedSuscriber = await suscriber.save();
        // console.log(editedSuscriber)
        return res.status(200).json({});

    }

    catch (err) {
        res.status(500).json({
            errorMessage: " error getting suscriber from database...."
        })

        console.log(err.message)
    }

}



const editCustomerImage = async (req, res) => {
    try {
        if(req.file !==null || req.file !==undefined){
            let customerImagePath = req.file.path;
            _suscriber.customerImagePath = customerImagePath;
            return res.status(200).json();
        }
      
    }
    catch (err) {
        res.status(500).json({
            errorMessage: " error getting suscriber from database...."
        })

        console.log(err.message)
    }

}


const editRef2Image = async (req, res) => {
    try {

        if(req.file !==null || req.file !==undefined){
            let referee2ImagePath = req.file.path;
            _suscriber.referee2ImagePath = referee2ImagePath;
            console.log("edit 2 is fired")
            return res.status(200).json();
        }

        return null
    }
    catch (err) {
        res.status(500).json({
            errorMessage: " error getting suscriber from database...."
        })

        console.log(err.message)
    }

}


const editRef1Image = async (req, res) => {
    try {

        if(req.file !==null || req.file !==undefined){
            let referee1ImagePath = req.file.path;
            _suscriber.referee1ImagePath = referee1ImagePath;
            console.log("edit 1 is fired")

            return res.status(200).json();
        }
        return null
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


