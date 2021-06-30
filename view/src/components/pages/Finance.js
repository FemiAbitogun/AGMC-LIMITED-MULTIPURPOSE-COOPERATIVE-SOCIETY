
import React, { useContext, useEffect } from 'react'
import FinanceForm from '../financeDepartmentForm/Finance'
import Navbar from '../Navbar'
import axios from 'axios';
import { authorized } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
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
            {auth && (
                <div>

                    <Navbar/>
                    <div className="container mt-4">
                        {/*    <span className="col-sm-6 container "> <Link to="/userList" className="link-light btn btn-dark  fw-bold"> User List</Link >

 */}
                        <Link to="/financeTable" className="container row  mt-4 mb-4 link-dark btn btn-warning  fw-bold">VIEW REGISTERED DATAS</Link>
                        <FinanceForm></FinanceForm>
                    </div>
                </div>

            )}




        </div>
    )
}

export default Finance
