import React, { useContext} from 'react'
import { Link } from 'react-router-dom';
import { authorized } from '../../context/AuthContext';
import Navbar from '../Navbar';

function Marketing() {

    const { auth } = useContext(authorized);
   
    function display() {
        return (
            <div>
                

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
            <Navbar />
            {auth && display()}
        </div>
    )





}

export default Marketing
