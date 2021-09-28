import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import { authorized } from '../../context/AuthContext';
import AuthenticatedUserTable from '../tables/AuthenticatedUserTable';



function Authorization() {


const {auth}= useContext(authorized)



function display(){

    return (

        <div>

            <AuthenticatedUserTable />


            <div className="row container p-15">
                <span className="col-sm-6 container ">  <Link to="/createUser" className="link-light btn btn-dark  fw-bold " >Create User</Link ></span>
                <span className="col-sm-6 container "> <Link to="/userList" className="link-light btn btn-dark  fw-bold"> User List</Link >


                </span>


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

export default Authorization
