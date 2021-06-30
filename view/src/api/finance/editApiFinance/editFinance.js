import axios from 'axios'




const url = "http://localhost:9000/api/finance/edit/"


export const editFinanceTable = async (body, id) => {

    const result = await axios.patch(
        url + id,
        body
    );



}
