import axios from 'axios'


const url = "http://localhost:9000/api/dailyContribution"

export const postDailyContribution= async (body) => {
    const result = await axios.post(
        url,
        body
    );

}