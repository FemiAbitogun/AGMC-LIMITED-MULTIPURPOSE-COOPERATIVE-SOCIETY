const Mongoose = require('mongoose');


const userSchema =new Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password:
    {
        type: String,
        required: true
    },
    roleName:
    {
        type: String,
        required: true
    }
})


module.exports=Mongoose.model("authorizedUser",userSchema);