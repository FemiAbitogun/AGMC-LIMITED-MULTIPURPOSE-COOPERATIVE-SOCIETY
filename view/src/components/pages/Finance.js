
import React, { useContext, useEffect } from 'react'
import FinanceForm from '../financeDepartmentForm/Finance'
import Navbar from '../Navbar'
import { authorized } from '../../context/AuthContext';
import { Link } from 'react-router-dom';




function Finance() {

    const { auth } = useContext(authorized);


    return (
        <div>
            <Navbar />

            {auth && (
                <div className="container">
                    <div className="conatainer text-center mb-4 mt-4"><b><h3>Welcome to the Finance department</h3>
                    </b></div>
                    <div className="container mt-4">
                        <Link to="/financeTable" className="row  mt-4 mb-4 link-dark btn btn-warning  fw-bold">VIEW REGISTERED DATAS</Link>
                        <FinanceForm />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Finance
