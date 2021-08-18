import React, { useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { authorized } from '../../context/AuthContext';
import Navbar from '../Navbar';
import LoginForm from '../../components/forms/authorization/LoginForm'
import axios from 'axios';

function Marketing() {

    const { auth, setAuth } = useContext(authorized);
    const history = useHistory();

    const url2 = "http://localhost:9000/api/authenticateUser/confirm";

    useEffect(() => {
        async function checkOut() {
            let _name = localStorage.getItem("name");

            if (_name !== "") {
                const body = { name: _name }
                const { data } = await axios.post(url2, body);
                if (data) {
                    setAuth(data);
                }
            }

            else if (_name === "") {
                auth === "" && history.push('/')
            }
        }
        checkOut();
    }, [])


    function display() {
        return (
            <div>
                <Navbar />

                <div className="container mt-4">
                    <h2 className="text-center mt-4 mb-4 text-danger "> MARKETING DEPARTMENT</h2>

                    <div className="d-flex flex-wrap ">

                        <div className="dropdown">
                            <button className="button  bg-dark btn-default fw-bold dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Forms
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                {

                                    (auth.user.roleName === "admin" || auth.user.roleName === "hdm" || auth.user.roleName === "hdf") && (
                                        <>
                                        {
                                            (auth.user.roleName === "admin" || auth.user.roleName === "hdm" )&&(
                                                <Link to="/admission" className="link-warning btn btn-light fw-bold p-3">Unit Admission</Link >
                                            )
                                        }
                                        </>

                                    )
                                }
                                <Link to="/daily" className="link-dark btn btn-light fw-bold p-3">Daily Form</Link >
                                <Link to="/Monthly" className="link-success btn btn-light fw-bold p-3">Monthly Form</Link >


                            </ul>
                        </div>





                    </div>








                </div>

            </div>
        )




    }



    return (
        <div>
            {auth && display()}
        </div>
    )





}

export default Marketing
