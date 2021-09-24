import axios from 'axios'

const url = "http://localhost:9000/api/monthlyContribution/edit/monthly/"


const config = {
    headers: {
        "Content-Type": "multipart/form-data"
    }
}



export const editMonthlySuscriber = async (body, id) => {
    const result = await axios.patch(
        url + id,
        body,
        config
    );
}









