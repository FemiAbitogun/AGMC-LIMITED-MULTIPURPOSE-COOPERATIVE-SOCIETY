import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { authorized } from '../context/AuthContext';
import MonthlyContributionTable from './tables/MonthlyContributionTable';

function Navbar() {

    const { auth } = useContext(authorized)

    return (
        <div>

            <h2 className="text-center mt-3 text-danger "> welcome to AGMCS</h2>
            <nav className="navbar  navbar-light bg-light">
                <div className="container-fluid">
                    {
                        auth.user.roleName == "user" ? (
                            <div>
                                <Link to="/Monthly" className="nav-link active"> Monthly Form Contribution</Link >
                                <Link to="/monthlySuscriberTable" className="nav-link active"> Monthly Suscriber Table</Link >
                            </div>


                        ) : (<div>
                            <Link to="/admission" className="nav-link active"> Admission to Unit</Link >
                            <Link to="/daily" className="nav-link active"> Daily Contribution</Link >
                            <Link to="/Monthly" className="nav-link active"> Monthly Form Contribution</Link >
                            <Link to="/createUser" className="nav-link active">Create New User</Link >
                            <Link to="/userList" className="nav-link active">Authenticated Users</Link >
                            <Link to="/monthlySuscriberTable" className="nav-link active"> Monthly Suscriber Table</Link >
                        </div>
                        )
                    }

                </div>

            </nav>




        </div>
    )

}

export default Navbar
