import axios from 'axios'
const url = "http://localhost:9000/api/monthlyContribution"

const config = {
    headers: {
        "Content-Type": "multipart/form-data"
    }
}

export const postForm = async (body) => {
await axios.post(url,body,config);

}



