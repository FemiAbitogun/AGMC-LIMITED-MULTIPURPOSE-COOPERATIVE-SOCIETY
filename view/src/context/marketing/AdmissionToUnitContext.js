import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';
export const AdmissionContext = createContext();


function AdmissionToUnitContext(props) {

    const [userData, setUserData] = useState([]);
    const [isMounted, setisMounted] = useState(true)

    const source = axios.CancelToken.source();

    const getAdmissionToUnit = async () => {

        setisMounted(true);

        try {
            if (isMounted) {
                var { data } = await axios.get("http://localhost:9000/api/admission", { cancelToken: source.token })
                setUserData(data)
            }
            if (!isMounted) return;
        } catch (error) {
            console.log(error.message)
        }


    }


    useEffect(() => {

        getAdmissionToUnit();

        return () => {
            setisMounted(false);
            // source.cancel();

        }
    }, [])





    function deleteMethod(id) {
        axios.delete(`http://localhost:9000/api/admission/delete/${id}`)
        setisMounted(true)
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
