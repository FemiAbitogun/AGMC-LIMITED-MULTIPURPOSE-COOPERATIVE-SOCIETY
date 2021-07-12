import React, { createContext, useState } from 'react'
import axios from 'axios';
export const AdmissionContext = createContext();


function AdmissionToUnitContext(props) {

    const [userData, setUserData] = useState([]);
    const getAdmissionToUnit = async () => {
        var { data } = await axios.get("http://localhost:9000/api/admission")
        setUserData(data)
    }


    function deleteMethod(id) {
        axios.delete(`http://localhost:9000/api/admission/delete/${id}`)
         getAdmissionToUnit();
    }


    return (
        <div >
            <AdmissionContext.Provider value={{ getAdmissionToUnit, deleteMethod, userData }}>
                {props.children}
            </AdmissionContext.Provider>
        </div>
    )
}

export default AdmissionToUnitContext
