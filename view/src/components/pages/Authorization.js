import React from 'react'
import { Link } from 'react-router-dom';
import AuthenticatedUserTable from '../tables/AuthenticatedUserTable';



function Authorization() {
    return (

        <div className="container">

            <AuthenticatedUserTable />


            <div className="row container p-15">


                <span className="col-sm-6 container ">  <Link to="/createUser" className="link-light btn btn-dark  fw-bold " >Create User</Link ></span>
                <span className="col-sm-6 container "> <Link to="/userList" className="link-light btn btn-dark  fw-bold"> User List</Link >


                </span>


            </div>


        </div>


    )
}

export default Authorization
