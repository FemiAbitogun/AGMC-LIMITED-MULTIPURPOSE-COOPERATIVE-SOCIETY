import axios from 'axios'

const url = "http://localhost:9000/api/monthlyContribution/edit/month"


const config = {
    headers: {
        "Content-Type": "multipart/form-data"
    }
}



export const editMonthlySuscriber = async (body) => {

    const result = await axios.patch(
        url,
        body,
        config
    );

}




export const editCustomerImage = async (body) => {

    const result = await axios.patch(url + "/referee1",
        body,
        config
    );


}



export const editRef1Image = async (body) => {

    const result = await axios.patch(url + "/referee1",
        body,
        config
    );


}


export const editRef2Image = async (body) => {

    const result = await axios.patch(url + "/referee1",
        body,
        config
    );


}