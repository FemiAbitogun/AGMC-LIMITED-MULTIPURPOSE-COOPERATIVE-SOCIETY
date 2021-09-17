
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










let newUserSuscriber = new Suscriber();
let passedImage1 = false;
let passedImage2 = false;


async function referee1ImageSuscriberAccount(req, res) {
    passedImage1 = false;
    newUserSuscriber.referee1ImagePath = req.file.path;
    passedImage1 = true;
    return res.status(200).send();
}


async function referee2ImageSuscriberAccount(req, res) {
    passedImage2 = false;
    newUserSuscriber.referee2ImagePath =req.file.path;
    passedImage2 = true;  
    return res.status(200).send();
}



async function refImageIMiddleware(req, res, next) {
  if(passedImage1){
      next();
  }
}

async function refImageIIMiddleware(req, res, next) {
    if(passedImage2){
        next();
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


        const customerImagePath = req.file.path;

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
            customerImagePath: customerImagePath,
            referee1ImagePath: newUserSuscriber.referee1ImagePath,
            referee2ImagePath: newUserSuscriber.referee2ImagePath,


            referalCode,
            customerImagePath: customerImagePath,

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
    referee1ImageSuscriberAccount,
    referee2ImageSuscriberAccount,
    getAllSuscriberAccount,
    createSuscriberAccount,
    deleteSuscriberAccount,
    getSuscriberAccountById,

    refImageIMiddleware,refImageIIMiddleware


};










