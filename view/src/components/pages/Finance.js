
import React, { useContext, useEffect, useState } from 'react'
import FinanceForm from '../financeDepartmentForm/Finance'
import Navbar from '../Navbar'
import axios from 'axios';
import { authorized } from '../../context/AuthContext';

const url = "http://localhost:9000/api/authenticateUser/confirm";



function Finance() {

    const { auth, setAuth, logOut } = useContext(authorized);


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
        <div>
            <div className="conatainer text-center mb-4 mt-4"><b><h3>Welcome to the Finance department</h3>
            </b></div>


            <Navbar></Navbar>
            <div className="container mt-4">
            <FinanceForm></FinanceForm>
            </div>
            

        </div>
    )
}

export default Finance
