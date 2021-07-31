import React ,{useContext}from 'react'
import { Link } from 'react-router-dom';
import { authorized } from '../../context/AuthContext';
import Navbar from '../Navbar';

function Marketing() {


    const { auth, logOut } = useContext(authorized);


    return (
        <div>
            <Navbar />

            <div className="container mt-4">
                <h2 className="text-center mt-4 mb-4 text-danger "> MARKETING DEPARTMENT</h2>

                <div className="d-flex flex-wrap justify-content-around ">

                    {
                        auth.user.roleName === "admin" && (
                            <>
                                <Link to="/admission" className="link-light btn btn-danger fw-bold p-3">Unit Admission</Link >
                           
                            </>

                        )
                    }

                    <Link to="/daily" className="link-light btn btn-dark fw-bold p-3">Daily Form</Link >
                    <Link to="/Monthly" className="link-dark btn btn-light fw-bold p-3">Monthly Form</Link >






                </div>








            </div>

        </div>
    )
}

export default Marketing
