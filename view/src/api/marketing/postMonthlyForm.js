import axios from 'axios'



const url = "http://localhost:9000/api/monthlyContribution"


const config = {
    headers: {
        "Content-Type": "multipart/form-data"
    }
}
export const postForm = async (body) => {

    const result = await axios.post(
        url,
        body,
        config
    );


}


export const postRef1Image = async (body) => {

    const result = await axios.post("http://localhost:9000/api/monthlyContribution/referee1",
        body,
        config
    );


}


export const postRef2Image = async (body) => {

    const result = await axios.post("http://localhost:9000/api/monthlyContribution/referee2",
        body,
        config
    );


}