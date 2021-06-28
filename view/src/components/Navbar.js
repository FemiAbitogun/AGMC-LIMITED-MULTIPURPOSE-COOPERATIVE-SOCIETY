import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { authorized } from '../context/AuthContext';

function Navbar() {

    const { auth } = useContext(authorized)

    return (
        <div>


            <h2 className="text-center mt-3 text-danger "> AGMCS LIMITED</h2>

            <nav className="navbar" >
                <div className="container row">
                    {
                        auth.user.roleName === "user" ? (
                            <div className="navbar-nav">
                                {/*  <Route path="/monthly" component={MonthlyForm} /> */}
                                <Link to="/monthly" className="link-light btn btn-dark fw-bold">Marketing Department</Link >
                            </div>

                        ) : (

                            <div className="container">

                                <div className=" row container">
                                    <Link to="/marketing" className="link-light btn btn-dark fw-bold">Marketing Department</Link >
                                </div>

                                <div className=" row container mt-1">
                                    <Link to="/authorizationPage" className="link-light btn btn-danger fw-bold">Authorization Page</Link >
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
