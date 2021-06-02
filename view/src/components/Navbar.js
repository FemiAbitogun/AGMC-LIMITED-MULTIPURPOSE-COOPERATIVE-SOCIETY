import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {


    return (
        <div>

            <div className="container">
                <h2 className="text-center mt-3 text-danger "> welcome to AGMCS</h2>
                <nav className="navbar  navbar-light bg-light">
                    <div className="container-fluid">
                        <Link to="/AdmissionIntoUnit" className="nav-link active"> Admission to Unit</Link >
                        <Link to="/DailyContribution" className="nav-link active"> Daily Contribution</Link >
                        <Link to="/MonthlyFormcontribution" className="nav-link active"> Monthly Form Contribution</Link >
                    </div>

                </nav>

            </div>


        </div>
    )

}

export default Navbar
