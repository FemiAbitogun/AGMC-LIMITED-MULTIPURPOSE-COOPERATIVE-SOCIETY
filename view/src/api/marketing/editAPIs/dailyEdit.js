import axios from 'axios'




const url = "http://localhost:9000/api/daily/edit/"


export const dailyEdit = async (body, id) => {

    const result = await axios.patch(
        url + id,
        body
    );



}
