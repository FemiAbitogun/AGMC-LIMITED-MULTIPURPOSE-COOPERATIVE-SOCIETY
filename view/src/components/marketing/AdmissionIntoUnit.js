import React, { useContext, useEffect } from 'react'
import { authorized } from '../../context/AuthContext'
import AdmissionIntoUnitForm from '../forms/admissionToUnit/AdmissionIntoUnitForm'
import axios from 'axios'
import AdmissionToUnitTable from '../tables/AdmissionToUnitTable'

import AdmissionToUnitContext from '../../context/marketing/AdmissionToUnitContext'
import Navbar from '../Navbar'

function AdmissionIntoUnit() {
    const { auth, setAuth } = useContext(authorized);

    const url = "http://localhost:9000/api/authenticateUser/confirm";

    async function checkOut() {
        let _name = localStorage.getItem("name");
        const body = { name: _name }
        const { data } = await axios.post(url, body);
        if (data) {
            setAuth(data);
        }
    }


    useEffect(() => {
        checkOut();
    }, [])


    return (

        <div >
            
            <Navbar   style={{width:"100%"}} />
            <div className="container">
                <h2 className="text-center mt-4 mb-4"> WELCOME TO ADDMISSION TO UNIT PAGE</h2>

                <AdmissionToUnitContext>
                    <AdmissionIntoUnitForm />
                    {/* <AdmissionToUnitTable /> */}
                </AdmissionToUnitContext>
            </div>
        </div>

    )
}

export default AdmissionIntoUnit
