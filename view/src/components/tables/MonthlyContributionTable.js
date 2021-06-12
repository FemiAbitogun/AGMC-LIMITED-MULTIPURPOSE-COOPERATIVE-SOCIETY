import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import ReactDOM from 'react-dom';
import './Table.css';





function MonthlyContributionTable() {
    const url = "http://localhost:9000/api/monthlyContribution"

    const [userData, setUserData] = useState([]);


    useEffect(() => {
        getMonthlyAccount();
    }, [])


    async function getMonthlyAccount() {
        var { data } = await axios.get(url)
        setUserData(data)
        // { responseType: 'blob' }
    }

    async function getImage() {
        var { dataImage } = await axios.get(url, { responseType: 'blob' })
        // <img src={URL.createObjectURL(user.customerImage)} />
    }



    function displayMonthlyAccount() {

        return userData.map((user) => {
            console.log(user.customerImagePath)
            return (
                <div key={user._id} className="container table mt-4">

                    <img src={`http://localhost:9000/${user.customerImagePath}`} />


                    <table className="table container">

                        <tbody>

                            <tr>
                                <th scope="row">Branch</th>
                                <td>{user.branch}</td>

                                <th scope="row">Form No</th>
                                <td>{user.formNo}</td>

                                <th scope="row">Residential Address</th>
                                <td>{user.residentialAddress}</td>

                                <th scope="row">Full Name</th>
                                <td>{user.fullName}</td>

                                <th scope="row">Email</th>
                                <td>{user.email}</td>

                                <th scope="row">Phone</th>
                                <td>{user.phone}</td>
                            </tr>


                            <tr>
                                <th scope="row">Occupation</th>
                                <td>{user.occupation}</td>

                                <th scope="row">Marital Status</th>
                                <td>{user.maritalStatus}</td>

                                <th scope="row">Religion</th>
                                <td>{user.religion}</td>

                                <th scope="row">Gender</th>
                                <td>{user.gender}</td>

                                <th scope="row">Birthday</th>
                                <td>{user.birthday}</td>
                            </tr>

                            <tr>
                                <th scope="row">Permanent Home Address</th>
                                <td>{user.permanentHomeAddress}</td>

                                <th scope="row">State Of Origin</th>
                                <td>{user.stateOfOrigin}</td>

                                <th scope="row">LGA</th>
                                <td>{user.LGA}</td>

                                <th scope="row">Home Town</th>
                                <td>{user.homeTown}</td>

                                <th scope="row">Preffer Days O fMeeting</th>
                                <td>{user.prefferDaysOfMeeting}</td>
                            </tr>


                            <tr>
                                <th scope="row">Contribution Plan</th>
                                <td>{user.contributionPlan}</td>

                                <th scope="row">Account Number</th>
                                <td>{user.accountNumber}</td>

                                <th scope="row">Means Of Identification</th>
                                <td>{user.meansOfIdentification}</td>

                                <th scope="row">Id Card No</th>
                                <td>{user.idCardNo}</td>
                            </tr>


                            <div className="row nav">
                                <h5 className="text-danger">NEXT OF KIN INFORMATION</h5>
                            </div>


                            <tr>
                                <th scope="row">Address</th>
                                <td>{user.kinAddress}</td>

                                <th scope="row">Email</th>
                                <td>{user.kinEmail}</td>

                                <th scope="row">Occupation</th>
                                <td>{user.kinOccupation}</td>

                                <th scope="row">Office Address</th>
                                <td>{user.kinOfficeAddress}</td>

                                <th scope="row">Relationship Type</th>
                                <td>{user.kinRelationshipType}</td>

                                <th scope="row">Years Of Relationship</th>
                                <td>{user.kinYearOfrelationship}</td>
                            </tr>
                        </tbody>
                        <input type="submit" value="delete" className="btn btn-danger"
                            onClick={() => { deleteMethod(user._id) }} />
                    </table>

                    <br className="mt-4"></br>

                </div>
            )
        })


    }



    function deleteMethod(id) {
        axios.delete(`${url}/delete/${id}`)
        getMonthlyAccount();
    }


    return (
        <div className="container">
            <div className=" container row text-center text-success"><h4>MONTHLY SUSCRIBERS LIST</h4></div>
            <div className="container row">
                {displayMonthlyAccount()}
            </div>
        </div>
    )
}

export default MonthlyContributionTable
