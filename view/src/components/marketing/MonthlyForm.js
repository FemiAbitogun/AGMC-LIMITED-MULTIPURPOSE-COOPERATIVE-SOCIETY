import React, { useContext, useEffect } from 'react'
import { authorized } from '../../context/AuthContext'
import { useHistory } from 'react-router'

import MonthlyContributionComponent from '../forms/monthlyFillForm/MonthlyContributionComponent'


import Marketing from '../pages/Marketing'



import axios from 'axios'



function MonthlyForm() {
    const { auth, setAuth } = useContext(authorized);
    const history = useHistory();


    const url = "http://localhost:9000/api/authenticateUser/confirm";
    useEffect(() => {
        async function checkOut() {
            let _name = localStorage.getItem("name");

            if (_name !==undefined) {
                const body = { name: _name }
                const { data } = await axios.post(url, body);
                if (data) {
                    setAuth(data);
                }
            }

            else if (_name ===undefined) {
                auth === "" && history.push('/')
            }
        }
        checkOut();
    }, [])





    return (


        <div>
            <Marketing />

            <div className="container">
                <h2 className="text-center">MONTHLY MEMBERSHIP APPLICATION FORM </h2>
                {auth && <MonthlyContributionComponent />}

            </div>



        </div>








    )
}

export default MonthlyForm
