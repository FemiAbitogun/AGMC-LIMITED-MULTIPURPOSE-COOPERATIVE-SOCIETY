const AuthorizedUsers = require('../../model/Account/authenticateUsers');
const bcrypt = require('bcryptjs');



const confirm = async (req, res) => {
    try {
        const { name } = req.body;
        const user = await AuthorizedUsers.findOne({ name })
        
        if (!user)
            return res.status(400).json({
                errorMessage: "invalid credentials......"
            })

        return res.status(200).json({

            user,
            authorization: user.rollName

        })


        // res.send("ok")
    }
    catch (err) {
        res.status(500).json({
            errorMessage: err.message
        })
    }

}


const getAllUserAccount = async (req, res) => {
    try {
        const allUsers =await AuthorizedUsers.find();
        if (!allUsers)
            return res.status(500).json({
                errorMessage: "can not find users"
            })

        return res.status(200).json(allUsers);
    }
    catch (err) {
        res.status(500).json({
            errorMessage: " error saving datas to database...."
        })
    }

}







// CREATE USER

const createUserAccount = async (req, res) => {
    try {

        const { name, password, roleName } = req.body;
        const harshedPassword = await bcrypt.hash(password, 10);

        if (!name || !password || !roleName)
            return res.status(400).json({
                errorMessage: " not all fields has been entered"
            })



        const newUser = new AuthorizedUsers({
            name,
            password: harshedPassword,
            roleName
        })
        const savedUser = await newUser.save();

        res.status(201).json(savedUser);

    }
    catch (err) {
        res.status(500).json({
            errorMessage: " error saving datas to database...."
        })
    }

}


const loginUserAccount = async (req, res) => {
    try {
        const { name, password } = req.body;
        const user = await AuthorizedUsers.findOne({ name })

        if (!user)
            return res.status(400).json({
                errorMessage: "invalid credentials......"
            })

        const _password = await bcrypt.compare(password, user.password);
        if (!_password)
            return res.status(400).json({
                errorMessage: "invalid credentials......"
            })


        return res.status(200).json({

            user,
            authorization: user.rollName


        })


    }
    catch (err) {
        res.status(500).json({
            errorMessage: err.message
        })
    }

}



















// DELETE USERS
const deleteUserAccount = async (req, res) => {

    try {

        const id = req.params.id;
        const user = await AuthorizedUsers.findByIdAndDelete(id)


        res.status(200).json(user)
    }
    catch (err) {
        res.status(500).json({
            errorMessage: " failed to delete user from database...."
        })
    }

}






module.exports = { confirm, getAllUserAccount, createUserAccount, deleteUserAccount, loginUserAccount };










