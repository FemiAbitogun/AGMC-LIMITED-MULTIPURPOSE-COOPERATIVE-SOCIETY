import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { authorized } from '../../../../context/AuthContext';
import Navbar from '../../../Navbar';
import axios from 'axios';
import { AdmissionContext } from '../../../../context/marketing/AdmissionToUnitContext';

function AdmissionToUnitDetails() {

    const [userDataByID, setUserDataByID] = useState("");
    const [isMounted, setisMounted] = useState(true);
    const { id } = useParams();
    const { auth } = useContext(authorized);
    const { deleteMethod } = useContext(AdmissionContext)


    async function getUserDataByIDMethod(id) {
        let { data } = await axios.get(`http://localhost:9000/api/admission/${id}`)
        setUserDataByID(data)
    }

    useEffect(() => {
        if (isMounted) {
            getUserDataByIDMethod(id);
            setisMounted(false)
        }
    })


    function renderUsers() {

        return (
            <div className="table-responsive" style={{
                overflowX: "auto"
            }}>
                <table className="table table-dark table-striped  table-hover">
                    <thead>
                        <tr>
                            <th scope="row">Registration No</th>
                            <th scope="row">Refferal No</th>
                            <th scope="row">Date of Admission</th>
                            <th scope="row">Full Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{userDataByID.registrationNumber}</td>
                            <td>{userDataByID.refferalFileNumber}</td>
                            <td>{userDataByID.dateOfAdmission}</td>
                            <td>{userDataByID.fullName}</td>
                        </tr>
                    </tbody>



                    <thead>
                        <tr>
                            <th scope="row">PhoneNumber</th>
                            <th scope="row">Amount</th>
                            <th scope="row">total</th>
                            <th scope="row">Loan Qualify</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>{userDataByID.phoneNumber}</td>
                            <td>{userDataByID.amount}</td>
                            <td>{userDataByID.total}</td>
                            <td>{userDataByID.loanQualify}</td>
                            <td>
                                {(auth.user.roleName === "admin" || auth.user.roleName === "hdm") && (

                                    <div className="d-flex  justify-content-around">
                                        <input type="submit" value="Delete" className="btn btn-danger"
                                            onClick={() => { deleteMethod(userDataByID._id) }}
                                        />
                                        <span>
                                            <button className="btn btn-warning"><Link to={`/editAdmission/edit/${userDataByID._id}`}>Edit unit</Link> </button>
                                        </span>
                                    </div>
                                )}

                            </td>
                        </tr>
                    </tbody>
                </table>





            </div>)
    }



    return (
        <div>
            <Navbar />
            {userDataByID && renderUsers()}
        </div>
    )
}

export default AdmissionToUnitDetails
