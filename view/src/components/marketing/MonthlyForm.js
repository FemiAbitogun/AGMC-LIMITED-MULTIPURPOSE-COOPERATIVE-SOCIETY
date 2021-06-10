import React, { useContext, useEffect, useState } from 'react'
import { authorized } from '../../context/AuthContext'
import MonthlyBaseData from '../../context/MonthlyBaseData'
import SectionA from '../forms/monthlyFillForm/SectionA'
import SectionB from '../forms/monthlyFillForm/SectionB'
import SectionC from '../forms/monthlyFillForm/SectionC'
import SectionD from '../forms/monthlyFillForm/SectionD'
import axios from 'axios'



function MonthlyForm() {
    const { auth, setAuth,logOut } = useContext(authorized);



    const url2 = "http://localhost:9000/api/authenticateUser/confirm";

    useEffect(() => {
        async function checkOut() {
            let _name = localStorage.getItem("name");
            
            if (_name != null) {
                const body = { name: _name }
                const { data } = await axios.post(url2, body);
                if (data) {
                    setAuth(data);
                }
            }
        }
        checkOut();
    },[])


   

    return (

        <div className="container">
            <h2 className="text-center">MONTHLY MEMBERSHIP APPLICATION FORM </h2>
       
            <div className="row container offset-8 mt-4">
                <div className="col-3">
                    <input value="LOG OUT" onClick={() => logOut()} className="btn btn-danger " />
                </div>
            </div>
            <h2 className="text-center mt-4 text-danger">SECTION A </h2>

            <SectionA>
                <h2 className="text-center mt-4 text-danger">SECTION B </h2>
                <SectionB>
                    <h2 className="text-center mt-4 text-danger">SECTION C </h2>
                    <SectionC>
                        <h2 className="text-center mt-4 text-danger">SECTION D </h2>
                        <h2 className="text-center mt-4 text-danger">Spouse / Next of Kin</h2>
                        <SectionD>

                            <MonthlyBaseData />

                        </SectionD>
                    </SectionC>
                </SectionB>
            </SectionA>








        </div>





    )
}

export default MonthlyForm
