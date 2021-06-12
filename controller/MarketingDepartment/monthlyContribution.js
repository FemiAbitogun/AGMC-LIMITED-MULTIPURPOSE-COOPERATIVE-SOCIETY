
const fs = require('fs');
const { upload } = require('../../fileHelper')

const Suscriber = require('../../model/Management_team/Marketing_department/monthly_registration');


const getAllSuscriberAccount = async (req, res) => {
    try {
        const allSuscribers = await Suscriber.find();
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

//get photo

const getPhoto = async (req, res) => {
    try {

        const id = req.params.id;
        const result = await Suscriber.findOne({ _id: id });
        // const result = await Suscriber.find();

        if (!result)
            return res.status(500).json({
                errorMessage: "can not find photo"
            })

        res.contentType('image/jpeg');

        // res.contentType('image/jpg');

        res.send(result.customerImagePath );
    }
    catch (err) {
        res.status(500).json({
            errorMessage: err.message
        })
    }

}











// CREATE USER
const createSuscriberAccount = async (req, res) => {
    try {
        //var customerImage = fs.readFileSync(req.file.path);
        var customerImage = fs.readFile(req.file.path, 'utf8', async (err, data) => {
            if (err) {
                console.error(err);
                return;
            }

            const encoded = data.toString('base64');
            const result = {
                img: new Buffer.from(encoded, 'base64')
            }


            const {
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
            } = req.body;

            const newUserSuscriber = new Suscriber({

                customerImage: result.img,
                customerImagePath: req.file.path,

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
            })
            const savedSuscriber = await newUserSuscriber.save();
        })//   var customerImage = fs.readFile(req.file.path, 'utf8', (err, data)..

        /*
        const encoded = customerImage.toString('base64')
        const result = {
            img: new Buffer.from(encoded, 'base64')
        }
        */
        // res.contentType('image/jpeg'); //res.send(result.img);

    } //const createSuscriberAccount();


    catch (err) {
        res.status(500).json({
            errorMessage: err.message
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






module.exports = { getPhoto, getAllSuscriberAccount, createSuscriberAccount, deleteSuscriberAccount };










