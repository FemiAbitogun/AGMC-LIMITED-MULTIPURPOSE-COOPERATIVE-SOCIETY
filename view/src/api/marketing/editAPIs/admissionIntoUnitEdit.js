import axios from 'axios'


// app.use('/api/admission/edit', require('./routes/Management_team/Patch/admissionIntoUnit'));
// router.patch('/admissionIntoUnit/:id', editAdmissionIntoUnit)



const url = "http://localhost:9000/api/admission/edit/admissionIntoUnit/"


const config = {
    headers: {
        "Content-Type": "multipart/form-data"
    }
}



export const editAdmissionIntoUnitTable = async (body, id) => {

    const result = await axios.patch(
        url + id,
        body
    );



}
