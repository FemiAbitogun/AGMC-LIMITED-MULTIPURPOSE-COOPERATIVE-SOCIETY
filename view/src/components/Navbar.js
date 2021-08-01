import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { authorized } from '../context/AuthContext';
import image from "../components/forms/authorization/img/img.jpg"



function Navbar() {


    const { auth,setAuth } = useContext(authorized);
    const history = useHistory();

    function logOut() {
        localStorage.setItem("name", "");
        setAuth("");
        history.push("/")
    }

    function display() {


        return (
            <div className="bg-dark" style={{ width: "100%" }}>

                <nav className="navbar bg-dark " >
                    <div className="container row">
                        {

                            auth.user.roleName === "user" ? (
                                <div className="d-flex flex-wrap justify-content-between p-2  ">

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
                                    <button className="button btn btn-danger fw-bold" onClick={() => { logOut() }}> LogOut</button >

                                </div>

                            ) : (

                                // style={{ backgroundImage: `url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain" }}

                                <div>
                                    <div className="d-flex flex-wrap justify-content-between p-2  ">

                                        <div style={{ backgroundColor: "white", height: "5em", width: "5em", backgroundImage: `url(${image})`, backgroundSize: "contain" }} className="m-2" />




                                        <div className="dropdown">
                                            <button className="button btn btn-secondary fw-bold dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                Departments
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <Link to="/finance" className="link-success btn btn-light fw-bold p-3">Finance Department</Link >
                                                <Link to="/marketing" className="link-dark btn btn-light fw-bold p-3">Marketing Department</Link >
                                                <Link to="/authorizationPage" className="link-danger btn btn-light fw-bold p-3">Authorization Page</Link >

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

                                        {/*  <label for="cars">Choose a car:</label>

                    <select id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
         */}
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





    return (
        <div>
            {auth && display()}
        </div>
    )

}

export default Navbar
