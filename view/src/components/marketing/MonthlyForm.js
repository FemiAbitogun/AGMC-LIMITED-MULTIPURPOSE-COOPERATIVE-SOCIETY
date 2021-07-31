import React, { useContext, useEffect } from 'react'
import { authorized } from '../../context/AuthContext'

import MonthlyContributionComponent from '../forms/monthlyFillForm/MonthlyContributionComponent'


import Marketing from '../pages/Marketing'



import axios from 'axios'



function MonthlyForm() {
    const { auth, setAuth } = useContext(authorized);



    const url2 = "http://localhost:9000/api/authenticateUser/confirm";

    useEffect(() => {
        async function checkOut() {
            let _name = localStorage.getItem("name");

            if (_name !== "") {
                const body = { name: _name }
                const { data } = await axios.post(url2, body);
                if (data) {
                    setAuth(data);
                }
            }
        }
        checkOut();
    }, [])





    return (


        <div>
            <Marketing />

            <div className="container">
                <h2 className="text-center">MONTHLY MEMBERSHIP APPLICATION FORM </h2>
                <MonthlyContributionComponent />

            </div>



        </div>








    )
}

export default MonthlyForm
