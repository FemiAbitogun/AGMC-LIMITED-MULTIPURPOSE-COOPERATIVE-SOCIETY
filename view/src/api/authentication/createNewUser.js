import axios from 'axios';


const url = "http://localhost:9000/api/authenticateUser/create";


export const sendCreateUser = async (body) => {
    const result = await axios.post(url, body);


}