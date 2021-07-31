import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { authorized } from '../context/AuthContext';
import "../components/forms/authorization/Login.css";
// import image from "./img/img.jpg"
import image from "../components/forms/authorization/img/img.jpg"



function Navbar() {


    const { auth, logOut } = useContext(authorized);

    return (
        <div className="bg-dark" style={{ width: "100%" }}>



            <nav className="navbar bg-dark " >
                <div className="container row">
                    {
                        auth.user.roleName === "user" ? (
                            <div className="d-flex flex-wrap justify-content-between p-2  ">
                                <Link to="/marketing" className="button btn btn-dark fw-bold">Marketing Department</Link >
                                <button className="button btn btn-danger fw-bold" onClick={() => { logOut() }}> LogOut</button >

                            </div>

                        ) : (

                            // style={{ backgroundImage: `url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain" }}

                            <div>
                                <div className="d-flex flex-wrap justify-content-between p-2  ">

                                    <Link to="/finance" className="button btn btn-success fw-bold ">Finance Department</Link >
                                    <Link to="/marketing" className="button fw-bold btn btn-warning">Marketing Department</Link >
                                    <Link to="/authorizationPage" className="button btn btn-danger fw-bold">Authorization Page</Link >
                                    <Link to="/lists" className="button btn btn-danger fw-bold">Data Tables</Link >


                                    <button className="button btn btn-danger fw-bold" onClick={() => { logOut() }}> LogOut</button >


                                    <div style={{ backgroundColor: "white", height: "5em", width: "5em", backgroundImage: `url(${image})`, backgroundSize: "contain" }} className="m-2" />


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
