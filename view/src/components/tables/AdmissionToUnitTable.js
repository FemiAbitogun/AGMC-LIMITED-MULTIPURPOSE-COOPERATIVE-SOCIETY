import React, { useContext, useEffect} from 'react';
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

        return userData.map((user) => {

            return (
                <div key={user._id} className="container table mt-4">


                    <div className="container">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th scope="row">Registration No</th>
                                    <td>{user.registrationNumber}</td>

                                    <th scope="row">Refferal No</th>
                                    <td>{user.refferalFileNumber}</td>

                                    <th scope="row">Date of Admission</th>
                                    <td>{user.dateOfAdmission}</td>

                                    <th scope="row">Full Name</th>
                                    <td>{user.fullName}</td>
                                </tr>

                                <tr>
                                    <th scope="row">PhoneNumber</th>
                                    <td>{user.phoneNumber}</td>

                                    <th scope="row">Amount</th>
                                    <td>{user.amount}</td>

                                    <th scope="row">total</th>
                                    <td>{user.total}</td>

                                    <th scope="row">Loan Qualify</th>
                                    <td>{user.loanQualify}</td>

                                </tr>

                            </tbody>
                        </table>
                    </div>





                   
                    {(auth.user.roleName === "admin" || auth.user.roleName === "hdm")  && (

                        <div>
                            <input type="submit" value="delete" className="btn btn-success"
                                onClick={() => { deleteMethod(user._id) }}
                            />

                            <span>
                                <button className="btn btn-warning m-3"><Link to={`/editAdmission/edit/${user._id}`}>EDIT unit</Link> </button>
                            </span>
                        </div>


                    )}


                    <br className="mt-4"></br>

                </div>)
        })

    }




    return (
        <div>
            <Navbar />
            <div className="container">
                {renderUsers()}
            </div>
        </div>
    )
}

export default AdmissionToUnitTable
