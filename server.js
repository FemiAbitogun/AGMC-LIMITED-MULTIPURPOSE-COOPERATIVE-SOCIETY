const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv=require('dotenv').config();
const PARSER= require('body-parser');


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





const {databaseConfig} = require('./databaseConnection/databaseConfig');
databaseConfig();




app.use('/uploads',express.static('uploads'));


app.get('/',async(req,res)=>{
   res.sendFile('index.html')
})

 
 
//login and authentication routes............
app.use('/api/authenticateUser',require('./routes/Account/AuthenticateUsers'));




/*monthly contribution */
app.use('/api/monthlyContribution',require('./routes/Management_team/monthlyContribution'));



/*daily contribution */
app.use('/api/dailyContribution', require('./routes/Management_team/dailyContributionRegistration'));

/*admissionIntoUnit */
app.use('/api/admission', require('./routes/Management_team/admissionIntoUnit'));


