import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../../src/components/Navbar'



function Authorization() {
    return (

        <div className="container">

            <div className="row">
                <Navbar />
            </div>


            <div className="row container ">

                

                <span className="col-sm-6 container p-4">  <Link to="/createUser" className="link-light btn btn-dark  fw-bold " >Create User</Link ></span>


                <span className="col-sm-6 container p-4"> <Link to="/userList" className="link-light btn btn-dark  fw-bold"> User List</Link >
                </span>

              
            </div>


        </div>


    )
}

export default Authorization
