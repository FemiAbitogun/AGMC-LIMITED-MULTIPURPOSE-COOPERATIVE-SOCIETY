import axios from 'axios'


const url = "http://localhost:9000/api/admission"

export const postAdmissionToUnitForm = async (body) => {
    const result = await axios.post(
        url,
        body
    );

     
}