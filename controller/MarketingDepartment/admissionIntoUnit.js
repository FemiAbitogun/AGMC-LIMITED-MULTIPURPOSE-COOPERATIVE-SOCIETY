

const AdmissionIntoUnitModel = require('../../model/Management_team/Marketing_department/admissionIntoUnit');

const getAllAdmissionIntoUnit = async (req, res) => {
    try {
        const AllAdmissionIntoUnit = AdmissionIntoUnitModel.find();
        if (!AllAdmissionIntoUnit)
            return res.status(500).json({
                errorMessage: "can not find AdmissionIntoUnit"
            })

        return res.status(200).json(AdmissionIntoUnit);
    }
    catch (err) {
        res.status(500).json({
            errorMessage: " error getting AdmissionIntoUnit from database..."
        })
    }

}







// CREATE USER
const createAdmissionIntoUnit = async (req, res) => {
    try {

        // from front end......
        const {
            dateOfRegistration,
            fullName,
            phoneNumber, 
            unitCode,
            contributionCategory, 
            dateOfFirstDisbursment, 
            paymentMethod,
        } = req.body;


        // store in database......
        const newAdmissionIntoUnit = new AdmissionIntoUnitModel({
            dateOfRegistration,
            fullName,
            phoneNumber, 
            unitCode,
            contributionCategory, 
            dateOfFirstDisbursment, 
            paymentMethod,
        })
        const savednewUser = await newAdmissionIntoUnit.save();

        res.status(201).json("saved successfully");



    }
    catch (err) {
        res.status(500).json({
            errorMessage: " error saving datas to database...."
        })
    }

}




// DELETE USERS
const deleteAdmissionIntoUnit = async (req, res) => {

    try {

        const id = req.params.id;
        const user = await AdmissionIntoUnitModel.findByIdAndDelete(id)
        res.status(200).json(user)
    }
    catch (err) {
        res.status(500).json({
            errorMessage: " failed to delete user from database...."
        })
    }

}


module.exports = { getAllAdmissionIntoUnit, createAdmissionIntoUnit, deleteAdmissionIntoUnit };










