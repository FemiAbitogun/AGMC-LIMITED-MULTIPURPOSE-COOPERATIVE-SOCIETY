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
        body
    );

    console.log(result)

}




export const editCustomerImage = async (body, id) => {

    const result = await axios.patch(url + "customerImage/" + id,
        body,
        config
    );


}



export const editRef1Image = async (body, id) => {

    const result = await axios.patch(url + "referee1/" + id,
        body,
        config
    );


}


export const editRef2Image = async (body, id) => {

    const result = await axios.patch(url + "referee2/" + id,
        body,
        config
    );


}