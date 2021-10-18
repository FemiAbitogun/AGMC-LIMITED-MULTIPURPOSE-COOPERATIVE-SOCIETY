
import React, { useEffect, useState, useContext } from 'react'
import axios from "axios"
import { Link, useParams, useHistory } from 'react-router-dom'
import Navbar from '../../../Navbar';
import { authorized } from '../../../../context/AuthContext';


//jquery

let $ = window.$ = window.jJQuery = require('jquery');

function MonthlySuscriberDetail() {

    let { auth } = useContext(authorized)

    const { id } = useParams();
    const history = useHistory();

    const url = "http://localhost:9000/api/monthlyContribution"

    const [user, setUserData] = useState(undefined);
    const [isMounted, setisMounted] = useState(true);

    async function deleteMethod(id) {
        await axios.delete(`${url}/delete/${id}`)
        history.push('/monthlySuscriberTable')
    }

    useEffect(() => {

        console.log($);
        const _getMonthlyAccount = async () => {
            await getMonthlyAccount();
            setisMounted(false)
        }
        _getMonthlyAccount();

    })


    async function getMonthlyAccount() {

        try {
            if (isMounted) {
                var { data } = await axios.get("http://localhost:9000/api/monthlyContribution/" + id)
                data && setUserData(data);

                return
            }
            if (!isMounted) {
                return
            }
        } catch (error) {

        }

    }



    function displayMonthlyAccount() {


        return (
            <div className="container mt-4">

                <div className="row mt-2 mb-2 bg-light">

                    <div className="col-sm-3">
                        <label htmlFor="ReferalCode" className="form-label"> <h4>Referal Code</h4> </label>
                    </div>

                    <div className="col-sm-3 ">
                        <h5 className="">{user.referalCode} </h5>
                    </div>

                </div>


                <img src={`http://localhost:9000/${user.customerImagePath}`} alt="subject_photo" style={{
                    width: "10em",
                    height: "10em"
                }}



                />


                <table className="table">

                    <tbody className="container">

                        <tr>
                            {/* this */}
                            <th scope="row">State</th>
                            <td>{user.state}</td>




                            <th scope="row">Branch</th>
                            <td>{user.branch}</td>




                            {/* this */}
                            <th scope="row">Unit Code</th>
                            <td>{user.unitCode}</td>




                            <th scope="row">File No</th>
                            <td>{user.formNo}</td>

                        </tr>

                        <tr>
                            <th scope="row">Residential Address</th>
                            <td>{user.residentialAddress}</td>

                            <th scope="row">Full Name</th>
                            <td>{user.fullName}</td>
                        </tr>


                        <tr>
                            <th scope="row">Email</th>
                            <td>{user.email}</td>

                            <th scope="row">Phone</th>
                            <td>{user.phone}</td>

                            <th scope="row">Occupation</th>
                            <td>{user.occupation}</td>

                        </tr>


                        <tr>
                            <th scope="row">Marital Status</th>
                            <td>{user.maritalStatus}</td>
                            <th scope="row">Gender</th>
                            <td>{user.gender}</td>
                            <th scope="row">Birthday</th>
                            <td>{user.birthday}</td>
                            <th scope="row">Religion</th>
                            <td>{user.religion}</td>

                        </tr>


                        <tr>

                            <th scope="row">State Of Origin</th>
                            <td>{user.stateOfOrigin}</td>
                            <th scope="row">LGA</th>
                            <td>{user.LGA}</td>
                            <th scope="row">Home Town</th>
                            <td>{user.homeTown}</td>

                        </tr>

                        <tr>
                            <th scope="row">Permanent Home Address</th>
                            <td>{user.permanentHomeAddress}</td>

                            {/* <th scope="row">Preffer Days Of Meeting</th>
                                <td>{user.prefferDaysOfMeeting}</td> */}

                            <th scope="row">Contribution Plan</th>
                            <td>{user.contributionPlan}</td>
                        </tr>

                        <tr>


                            <th scope="row">Account Number</th>
                            <td>{user.accountNumber}</td>

                            <th scope="row">Means Of Identification</th>
                            <td>{user.meansOfIdentification}</td>

                            <th scope="row">Id Card No</th>
                            <td>{user.idCardNo}</td>
                        </tr>

                    </tbody>
                </table>






                <div className="row">
                    <h3 className="text-danger">NEXT OF KIN INFORMATION</h3>
                </div>

                <table className="table container">
                    <tbody className="container">
                        <tr>
                            <th scope="row">Address</th>
                            <td>{user.kinAddress}</td>

                            <th scope="row">Email</th>
                            <td>{user.kinEmail}</td>

                            <th scope="row">Occupation</th>
                            <td>{user.kinOccupation}</td>


                        </tr>


                        <tr>

                            <th scope="row">Office Address</th>
                            <td>{user.kinOfficeAddress}</td>

                            <th scope="row">Relationship Type</th>
                            <td>{user.kinRelationshipType}</td>

                            <th scope="row">Years Of Relationship</th>
                            <td>{user.kinYearOfrelationship}</td>

                        </tr>
                    </tbody>
                </table>





                <div className="row">
                    <h3 className="text-danger">REFEREE 1 INFORMATION</h3>
                </div>

                <img src={`http://localhost:9000/${user.referee1ImagePath}`} alt="subject1_photo" style={{
                    width: "10em",
                    height: "10em"
                }} />


                <table className="table">

                    <tbody className="container">
                        <tr>
                            <th scope="row">FullName</th>
                            <td>{user.referee1FullName}</td>
                            <th scope="row">Home Address</th>
                            <td>{user.referee1HomeAddress}</td>
                            <th scope="row">WorkAddress</th>
                            <td>{user.referee1WorkAddress}</td>
                            <th scope="row">Business</th>
                            <td>{user.referee1Business}</td>
                        </tr>

                        <tr>
                            <th scope="row">Email</th>
                            <td>{user.referee1Email}</td>
                            <th scope="row">Religion</th>
                            <td>{user.referee1Religion}</td>
                            <th scope="row">Phone</th>
                            <td>{user.referee1Phone}</td>
                            <th scope="row">Relationship</th>
                            <td>{user.referee1Relationship}</td>

                        </tr>

                    </tbody>
                </table>



                <div className="row">
                    <h3 className="text-danger">REFEREE 2 INFORMATION</h3>
                </div>


                <img src={`http://localhost:9000/${user.referee2ImagePath}`} alt="subject2_photo" style={{
                    width: "10em",
                    height: "10em"
                }} />





                <table className="table">
                    <tbody className="container">
                        <tr>
                            <th scope="row">FullName</th>
                            <td>{user.referee2FullName}</td>
                            <th scope="row">Home Address</th>
                            <td>{user.referee2HomeAddress}</td>
                            <th scope="row">WorkAddress</th>
                            <td>{user.referee2WorkAddress}</td>
                            <th scope="row">Business</th>
                            <td>{user.referee2Business}</td>
                        </tr>

                        <tr>
                            <th scope="row">Email</th>
                            <td>{user.referee2Email}</td>
                            <th scope="row">Religion</th>
                            <td>{user.referee2Religion}</td>
                            <th scope="row">Phone</th>
                            <td>{user.referee2Phone}</td>
                            <th scope="row">Relationship</th>
                            <td>{user.referee2Relationship}</td>
                        </tr>
                    </tbody>
                </table>



                {(auth.user.roleName === "admin" || auth.user.roleName === "hdm") && (
                    <>
                        <input type="button" value="DELETE" className="btn btn-danger"
                            onClick={() => { deleteMethod(user._id) }} />
                        <span>
                            <button className="btn btn-warning m-3"><Link to={`/editMonthly/edit/${user._id}`}>E D I T</Link> </button>
                        </span>

                        <span>
                            <button className="btn btn-default m-3"><Link to="/monthlySuscriberTable">BACK TO LIST</Link> </button>
                        </span>
                    </>

                )
                }


                <br className="mt-4"></br>

            </div>
        )



    }




    return (


        <div>

            <Navbar></Navbar>

            {user === undefined && <div>Loading....</div>}

            {user && <div>
                <div className="table-responsive">
                    {
                        displayMonthlyAccount()
                    }
                </div>
            </div>}



        </div>

    )
}

export default MonthlySuscriberDetail
