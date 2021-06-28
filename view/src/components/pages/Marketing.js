import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

function Marketing() {
    return (
        <div>
            <Navbar />
            <h2 className="text-center mt-3 text-danger "> MARKETING DEPARTMENT</h2>


            <div className="row container mt-4">

                <div className="col-3">
                    <Link to="/admission" className="link-light btn btn-dark fw-bold">Unit Admission</Link >
                </div>

                <div className="col-3">
                    <Link to="/daily" className="link-light btn btn-dark fw-bold">Daily Form</Link >
                </div>

                <div className="col-3">
                    <Link to="/Monthly" className="link-light btn btn-dark fw-bold">Monthly Form</Link >
                </div>


                <div className="col-3">
                    <Link to="/monthlySuscriberTable" className="link-light btn btn-dark fw-bold"> Monthly Suscriber List </Link >
                </div>

            </div>

        </div>
    )
}

export default Marketing
