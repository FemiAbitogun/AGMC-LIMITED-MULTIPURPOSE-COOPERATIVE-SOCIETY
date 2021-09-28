import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { authorized } from '../../context/AuthContext';
import { AdmissionContext } from '../../context/marketing/AdmissionToUnitContext';
import Navbar from '../Navbar';

function AdmissionToUnitTable() {

    const { userData, setisMounted, deleteMethod, getAdmissionToUnit, isMounted } = useContext(AdmissionContext);
    const { auth } = useContext(authorized);


    useEffect(() => {
        if (isMounted) {
            getAdmissionToUnit();
            setisMounted(false)
        }


    }, [deleteMethod])


    function renderUsers() {

        return userData.map((user, index) => {
            return (
                <div key={user._id} className="table-responsive" style={{
                    overflowX: "auto"
                }}>
                    <table className="table table-dark table-striped  table-hover">

                        <thead>
                            <tr>
                                <th scope="row">#</th>
                                <th scope="row">Registration No</th>
                                <th scope="row">Refferal No</th>
                                <th scope="row">Date of Admission</th>
                                <th scope="row">Full Name</th>
                            </tr>
                        </thead>


                        <tbody>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{user.registrationNumber}</td>
                                <td>{user.refferalFileNumber}</td>
                                <td>{user.dateOfAdmission}</td>
                                <td>{user.fullName}</td>
                                <td>
                                    {(auth.user.roleName === "admin" || auth.user.roleName === "hdm") && (
                                        <div className="d-flex  justify-content-around">
                                            <input type="submit" value="Delete" className="btn btn-danger"
                                                onClick={() => { deleteMethod(user._id) }}
                                            />

                                            <span>
                                                <button className="btn btn-warning "><Link to={`/editAdmission/edit/${user._id}`}>Edit</Link> </button>
                                            </span>

                                            <span>
                                                <button className="btn btn-primary"><Link to={`/admissionToUnitDetails/${user._id}`}>Details</Link> </button>
                                            </span>
                                        </div>
                                    )}


                                </td>
                            </tr>
                        </tbody>
                    </table>




                    <br className="mt-1"></br>

                </div>)
        })

    }




    return (
        <div>
            <Navbar />
            {renderUsers()}
        </div>
    )
}

export default AdmissionToUnitTable
