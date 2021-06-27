import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { authorized } from '../context/AuthContext';
import MonthlyContributionTable from './tables/MonthlyContributionTable';

function Navbar() {

    const { auth } = useContext(authorized)

    return (
        <div>

            <h2 className="text-center mt-3 text-danger "> welcome to AGMCS</h2>
            <nav className="navbar navbar-expand-lg navbar-dark  bg-dark" >
                <div className="container-fluid row">
                    {
                        auth.user.roleName == "user" ? (
                            <div className="navbar-nav">
                                <Link to="/Monthly" className="nav-item nav-link"><h4>Monthly Form </h4> </Link >
                                <Link to="/monthlySuscriberTable" className="nav-item nav-link"><h4>Monthly Suscriber Table</h4> </Link >
                            </div>


                        ) : (

                            <div className="row container">

                                <div className="navbar-nav">
                                    <div className="row container">
                                        <div className="col-3">
                                            <Link to="/admission" className="nav-item nav-link"><h4>Unit Admission</h4> </Link >
                                        </div>



                                        <div className="col-3">
                                            <Link to="/daily" className="nav-item nav-link"><h4>Daily Form</h4> </Link >
                                        </div>



                                        <div className="col-3">
                                            <Link to="/Monthly" className="nav-item nav-link"> <h4>Monthly Form </h4> </Link >
                                        </div>


                                        <div className="col-3">
                                            <Link to="/monthlySuscriberTable" className="nav-item nav-link"><h4>Monthly Suscriber List</h4> </Link >
                                        </div>

                                    </div>

                                </div>






                                <div className="row container">


                                    <div className="col-6">
                                        <Link to="/createUser" className="nav-item nav-link"><h4>New Login User</h4></Link >
                                    </div>

                                    <div className="col-6">
                                        <Link to="/userList" className="nav-item nav-link"><h4>List of Authenticated Users</h4></Link >
                                    </div>






                                </div>














                            </div>


                        )
                    }

                </div>

            </nav>




        </div>
    )

}

export default Navbar
