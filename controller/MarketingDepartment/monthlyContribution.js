


const { json } = require('express');
const fs = require('fs');
const { upload } = require('../../fileHelper')

const Suscriber = require('../../model/Management_team/Marketing_department/monthly_registration');


const getAllSuscriberAccount = async (req, res) => {
    try {
        const allSuscribers = Suscriber.find();
        if (!allSuscribers)
            return res.status(500).json({
                errorMessage: "can not find users"
            })

        return res.status(200).json(allSuscribers);
    }
    catch (err) {
        res.status(500).json({
            errorMessage: " error getting suscribers from database...."
        })
    }

}







// CREATE USER
const createSuscriberAccount = async (req, res) => {
    try {

        var customerImage = fs.readFileSync(req.file.path);
        const encoded = customerImage.toString('base64')
        const result = {
            img: new Buffer.from(encoded, 'base64')
        }

        /* might work without using multer
        const encoded = JSON.parse(req.file.path);
        const result = new Buffer.from(encoded, 'base64')
        */
        // res.contentType('image/jpeg')
        // res.send(result.img);

        

        const{
            branch,
            stateCode,
            unitCode,
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
        } = req.body;



        const newUserSuscriber = new Suscriber({

            customerImage: result.img,
            branch,
            stateCode,
            unitCode,
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
        })
        const savedSuscriber = await newUserSuscriber.save();

        res.status(201).json("saved successfully");



    }
    catch (err) {
        res.status(500).json({
            errorMessage: " error saving datas to database...."
        })
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






module.exports = { getAllSuscriberAccount, createSuscriberAccount, deleteSuscriberAccount };










