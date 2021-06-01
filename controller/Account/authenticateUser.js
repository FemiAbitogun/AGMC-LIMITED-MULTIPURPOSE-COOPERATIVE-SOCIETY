const AuthorizedUsers = require('../../model/Account/authenticateUsers');
const bcrypt = require('bcryptjs');





const getAllUserAccount = async (req, res) => {
    try {
        const allUsers = AuthorizedUsers.find();
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

        const { name, password, rollName } = req.body;
        const harshedPassword = await bcrypt.hash(password, 10);

        if (!name || !password || !rollName)
            return res.status(400).json({
                errorMessage: " not all fields has been entered"
            })



        const newUser = new AuthorizedUsers({
            name,
            password: harshedPassword,
            rollName
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




// DELETE USERS
const deleteUserAccount = async (req, res) => {

    try {

        const id = req.params.id;
        const user =await AuthorizedUsers.findByIdAndDelete(id)
       

        res.status(200).json(user)
    }
    catch (err) {
        res.status(500).json({
            errorMessage: " failed to delete user from database...."
        })
    }

}






module.exports = { getAllUserAccount, createUserAccount, deleteUserAccount };










