const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv=require('dotenv').config();



const app = express();

app.use(cors({
    credentials:true
}));
app.use(express.json());




const PORT=process.env.PORT||9000

// creating server..........................
app.listen(PORT, () => {
    console.log(`app listening @ port ${PORT}`)
})




/*
mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if (err)
        return console.log("error connecting to database")
    console.log('connection to database succesful.....')
});
*/
const {databaseConfig} = require('./databaseConnection/databaseConfig');
databaseConfig();




app.use(express.static('public'));

app.get('/',async(req,res)=>{
   res.sendFile('index.html')


})


//login and authentication routes............
app.use('/authenticateUser',require('./routes/Account/AuthenticateUsers'));



//management route

/*monthly contribution */
app.use('/monthlyContribution',require('./routes/Management_team/monthlyContribution'));

/*daily contribution */
app.use('/dailyContribution', require('./routes/Management_team/dailyContributionRegistration'));

/*admissionIntoUnit */
app.use('/admission', require('./routes/Management_team/admissionIntoUnit'));


