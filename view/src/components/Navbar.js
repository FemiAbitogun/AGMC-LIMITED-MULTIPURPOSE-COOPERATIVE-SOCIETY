import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { authorized } from '../context/AuthContext';
import image from "../components/forms/authorization/img/img.jpg"
import axios from 'axios'


function Navbar() {


    const { auth, checkOutSignedIn } = useContext(authorized);
    const history = useHistory();

    async function logOutAsync() {
        await axios.post("http://localhost:9000/api/authenticateUser/logOut", null, { withCredentials: true })
        history.push("/")
        await checkOutSignedIn();

    }





    function display() {
        return (
            <div style={{
                width: "100%",
                padding: "1%"

            }}>
                {

                    auth.user.roleName === "user" ? (
                        <div className="d-flex  justify-content-between  ">

                            <Link to="/marketing" className="button btn btn-dark fw-bold">Marketing Department</Link >
                            <div className="dropdown">
                                <button className="button btn btn-secondary fw-bold dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Data Tables
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <Link to="/monthlySuscriberTable" className="link-dark btn btn-light fw-bold p-3">Monthly Data</Link >
                                    <Link to="/dailyContributionTable" className="link-dark btn btn-light fw-bold p-3">Daily Data</Link >

                                </ul>
                            </div>
                            <button className="button btn btn-danger fw-bold" onClick={() => { logOutAsync() }}> LogOut</button >

                        </div>

                    ) : (

                        // style={{ backgroundImage: `url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain" }}
                        (auth.user.roleName === "admin" || auth.user.roleName === "hdm" || auth.user.roleName === "hdf") && (<div >
                            <div className="d-flex flex-wrap justify-content-between  ">

                                <div style={{ backgroundColor: "white", height: "5em", width: "5em", backgroundImage: `url(${image})`, backgroundSize: "contain" }} className="m-2" />


                                <div className="dropdown">
                                    <button className="button btn btn-secondary fw-bold dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Departments
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <Link to="/finance" className="dropdown-item link-success btn btn-light fw-bold p-3">Finance Department</Link >
                                        <Link to="/marketing" className="dropdown-item  link-dark btn btn-light fw-bold p-3">Marketing Department</Link >


                                        {auth.user.roleName === "admin" && (

                                            <Link to="/authorizationPage" className="dropdown-item  link-danger btn btn-light fw-bold p-3">Authorization Page</Link >

                                        )}


                                    </ul>
                                </div>



                                <div className="dropdown">
                                    <button className="button btn btn-secondary fw-bold dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Data Tables
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <Link to="/monthlySuscriberTable" className="link-dark btn btn-light fw-bold p-3">Monthly Data</Link >
                                        <Link to="/admissionToUnitTable" className="link-dark btn btn-light fw-bold p-3">Admission Data</Link >
                                        <Link to="/dailyContributionTable" className="link-dark btn btn-light fw-bold p-3">Daily Data</Link >

                                    </ul>
                                </div>



                                <button className="button btn btn-danger fw-bold" onClick={() => { logOutAsync() }}> LogOut</button >



                            </div>

                        </div>
                        )


                    )
                }

            </div>







        )




    }





    return (
        <nav className="bg-dark">
            {auth && display()}
        </nav>
    )

}

export default Navbar
