

const Suscriber = require('../../../model/Management_team/Marketing_department/monthly_registration');



const editMonthlySuscriber = async (req, res) => {
    try {
        // const suscriber = await Suscriber.findById(req.params.id);
        // if (!suscriber)
        //     return res.status(500).json({
        //         errorMessage: "can not find users"
        //     })
        // return res.status(200).json(suscriber);

        console.log(" edit fields"+req.params.id)
        
        return res.status(200).json();
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
        // const suscriber = await Suscriber.findById(req.params.id);
        // if (!suscriber)
        //     return res.status(500).json({
        //         errorMessage: "can not find users"
        //     })
        console.log("edit customer images"+req.params.id)
        return res.status(200).json();
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
        // const suscriber = await Suscriber.findById(req.params.id);
        // if (!suscriber)
        //     return res.status(500).json({
        //         errorMessage: "can not find users"
        //     })
        // return res.status(200).json(suscriber);

        console.log("EDIT REF2"+req.params.id)
        return res.status(200).json();
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
        // const suscriber = await Suscriber.findById(req.params.id);
        // if (!suscriber)
        //     return res.status(500).json({
        //         errorMessage: "can not find users"
        //     })
        // return res.status(200).json(suscriber);


        console.log("editREEF1"+req.params.id)
        return res.status(200).json();
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


