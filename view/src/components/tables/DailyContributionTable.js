import React, {useContext } from 'react';
import { Link } from 'react-router-dom'
import { authorized } from '../../context/AuthContext';
import { dailyContext } from '../../context/marketing/DailyContribution';
import Navbar from '../Navbar';



function DailyContributionTable() {


    const { auth } = useContext(authorized);


    const {deleteMethod, userData } = useContext(dailyContext);


    function renderUsers() {

        return userData.map((user) => {

            return (
                <div key={user._id} className="container mt-4">

                    <div className="col-sm-12">

                        <table className="table">
                            <tbody className="">
                                <tr>
                                    <th scope="row">Card No</th>
                                    <td>{user.cardNo}</td>


                                    <th scope="row">Full Name</th>
                                    <td>{user.fullName}</td>


                                    <th scope="row">Phone Number</th>
                                    <td>{user.phoneNumber}</td>

                                    <th scope="row">Amount</th>
                                    <td>{user.amount}</td>

                                </tr>


                                <tr>

                                    <th scope="row">Zone</th>
                                    <td>{user.zone}</td>


                                    <th scope="row">Referral Code</th>
                                    <td>{user.referralCode}</td>


                                    <th scope="row">Contribution</th>
                                    <td>{user.contribution}</td>


                                    <th scope="row">Date Of Registration</th>
                                    <td>{user.dateOfRegistration}</td>


                                    <th scope="row">Date Of First Contribution</th>
                                    <td>{user.dateOfFirstContribution}</td>

                                </tr>

                            </tbody>
                        </table>
                    </div>

                  
                    {
                         (auth.user.roleName === "admin" || auth.user.roleName === "hdm") && (
                            <>
                                <input type="submit" value="delete" className="btn btn-success"
                                    onClick={() => { deleteMethod(user._id) }} />
                                <span>


                                    <span>
                                        <button className="btn btn-warning m-3"><Link to={`/editDaily/edit/${user._id}`}>E D I T</Link> </button>
                                    </span>

                                </span>
                            </>

                        )
                    }






                    <br className="mt-4"></br>

                </div>)
        })

    }



    return (

        <div>
            <Navbar></Navbar>
            <div className="container">
                {auth&&userData && renderUsers()}
            </div>
        </div>


    )
}

export default DailyContributionTable
