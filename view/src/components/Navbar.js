import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { authorized } from '../context/AuthContext';
import "../components/forms/authorization/Login.css";

function Navbar() {


    const { auth, logOut } = useContext(authorized);

    return (
        <div className="bg-dark" style={{width:"100%"}}>

            {/* <h2 className="text-center mt-3 text-danger "> AGMCS LIMITED</h2> */}

            <nav className="navbar bg-dark " >
                <div className="container row">
                    {
                        auth.user.roleName === "user" ? (
                            <div className="navbar-nav">
                                <Link to="/marketing" className="link-light btn btn-dark fw-bold">Marketing Department</Link >
                            </div>

                        ) : (

                            <div>
                                <div className="d-flex flex-wrap justify-content-around p-2  ">

                                        <Link to="/finance" className="button btn btn-success fw-bold ">Finance Department</Link >
                                        <Link to="/marketing" className="button fw-bold btn btn-warning">Marketing Department</Link >
                                        <Link to="/authorizationPage" className="button btn btn-danger fw-bold">Authorization Page</Link >
                                        <button className="button btn btn-danger fw-bold" onClick={() => { logOut() }}> LogOut</button >
                            
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
