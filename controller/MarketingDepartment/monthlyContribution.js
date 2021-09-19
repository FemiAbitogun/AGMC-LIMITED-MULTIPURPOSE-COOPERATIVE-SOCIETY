
const Suscriber = require('../../model/Management_team/Marketing_department/monthly_registration');


const getAllSuscriberAccount = async (req, res) => {
    try {
        const allSuscribers = await Suscriber.find();
        if (!allSuscribers)
            return res.status(200).json();

        return res.status(200).json(allSuscribers);
    }
    catch (err) {
        res.status(500).json({
            errorMessage: " error getting suscribers from database...."
        })
    }

}



// get suscriber account by id................
const getSuscriberAccountById = async (req, res) => {
    try {
        const suscriber = await Suscriber.findById(req.params.id);
        if (!suscriber)
            return res.status(500).json({
                errorMessage: "can not find users"
            })

        return res.status(200).json(suscriber);
    }
    catch (err) {
        res.status(500).json({
            errorMessage: " error getting suscriber from database...."
        })
    }

}

// CREATE USER
const createSuscriberAccount = async (req, res) => {
    try {
        /*
        var customerImage = fs.readFileSync(req.file.path);
        var customerImage = fs.readFile(req.file.path, 'utf8', async (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            const encoded = data.toString('base64');
            const result = {
                img: new Buffer.from(encoded, 'base64')        
        */
        customerImagePath = req.files.customerImage[0].path;
        if (req.files.referee1Image) {
            referee1ImagePath = req.files.referee1Image[0].path;
        }
        if (req.files.referee2Image) {
            referee2ImagePath = req.files.referee2Image[0].path;
        }

        const {
            referalCode,
            branch,
            formNo,
            state,
            unitCode,

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


        newUserSuscriber = new Suscriber({

            customerImagePath,
            referee1ImagePath,
            referee2ImagePath,

            referalCode,
            state,
            branch,
            formNo,
            unitCode,


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

        })
        const savedSuscriber = await newUserSuscriber.save();
        return res.status(201).json("saved successfully");
    } //const createSuscriberAccount();

    catch (err) {
        res.status(500).json({
            errorMessage: err.message
        })

        console.log(err.message)
    }

}







// DELETE USERS
const deleteSuscriberAccount = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await Suscriber.findByIdAndDelete(id)
        res.status(200).json(user)
    }
    catch (err) {
        res.status(500).json({
            errorMessage: " failed to delete user from database...."
        })
    }

}

module.exports = {

    getAllSuscriberAccount,
    createSuscriberAccount,
    deleteSuscriberAccount,
    getSuscriberAccountById,

};










