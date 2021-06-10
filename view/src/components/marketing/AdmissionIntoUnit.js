import React, { useContext, useEffect, useState } from 'react'
import { authorized } from '../../context/AuthContext'
import AdmissionIntoUnitForm from '../forms/admissionToUnit/AdmissionIntoUnitForm'

import axios from 'axios'
import { useHistory } from 'react-router-dom'
import AdmissionToUnitTable from '../tables/AdmissionToUnitTable'


function AdmissionIntoUnit() {
    const { auth, setAuth, logOut } = useContext(authorized);
    const history = useHistory();
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
    }, [auth])


    return (
        <div className="container">


            <h2 className="text-center"> WELCOME TO ADDMISSION TO UNIT PAGE</h2>


            <div className="row container offset-8">
                <div className="col-3">
                    <input value="LOG OUT" onClick={() => logOut()} className="btn btn-danger " />
                </div>
            </div>



            <div className="row container mt-4">
                <AdmissionIntoUnitForm />
            </div>



            <div className="row mt-4">
                <AdmissionToUnitTable />
            </div>


        </div>
    )
}

export default AdmissionIntoUnit
