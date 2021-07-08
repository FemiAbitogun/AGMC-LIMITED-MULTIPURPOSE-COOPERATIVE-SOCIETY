import axios from 'axios'



export const postFinanceForm = async (body) => {
    const result = await axios.post(
        "http://localhost:9000/api/finance/create",
        body
    );

}

