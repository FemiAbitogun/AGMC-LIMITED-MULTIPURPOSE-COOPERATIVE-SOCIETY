import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function AdmissionToUnitTable() {




    const [userData, setUserData] = useState([]);

    useEffect(() => {
        getAdmissionToUnit();
    }, [userData]);


    const getAdmissionToUnit = async () => {
        var { data } = await axios.get("http://localhost:9000/api/admission")
        setUserData(data)
    }


    function deleteMethod(id) {
        axios.delete(`http://localhost:9000/api/admission/delete/${id}`)
        getAdmissionToUnit();

    }


    function renderUsers() {

        return userData.map((user) => {

            return (
                <div key={user._id} className="container table mt-4">

                    <table className="table conatainer" >
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


                 

                    <input type="submit" value="delete" className="btn btn-success"
                        onClick={() => { deleteMethod(user._id) }}
                    />
                
                    <span>
                        <button className="btn btn-warning m-3"><Link to={`/editAdmission/edit/${user._id}`}>EDIT unit</Link> </button>
                    </span>

                    <br className="mt-4"></br>

                </div>)
        })

    }




    return (
        <div>
            {renderUsers()}
        </div>
    )
}

export default AdmissionToUnitTable
