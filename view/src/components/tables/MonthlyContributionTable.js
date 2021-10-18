import React, { useEffect, useState, useContext } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import Navbar from '../Navbar';
import { authorized } from '../../context/AuthContext';

function MonthlyContributionTable() {




    const { auth } = useContext(authorized);


    const url = "http://localhost:9000/api/monthlyContribution"

    const [userData, setUserData] = useState([]);
    const [isMounted, setisMounted] = useState(true);




    async function deleteMethod(id) {
        await axios.delete(`${url}/delete/${id}`)
        setisMounted(true);
        getMonthlyAccount();
        displayMonthlyAccount();
    }


    useEffect(() => {
        getMonthlyAccount();

        return () => {
            setisMounted(false);
        }
    })



    async function getMonthlyAccount() {

        try {
            if (isMounted) {
                var { data } = await axios.get(url)

                data && (setUserData(data)) && displayMonthlyAccount();

                return
            }
            if (!isMounted) {
                return
            }
        } catch (error) {
            console.log(error.message)
        }

    }










    function displayMonthlyAccount() {


        return userData.map((user, index) => {

            return (
                <div key={user._id} className="table-responsive" >

                    <table className="table table-dark table-striped  table-hover">

                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Referal Code</th>
                                <th scope="col">Full Name</th>
                                <th scope="col">Unit Code</th>
                                <th scope="col">File No</th>
                                <th scope="col">Photo</th>
                            </tr>
                        </thead>


                        <tbody>
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{user.referalCode}</td>
                                <td>{user.fullName}</td>
                                <td>{user.unitCode}</td>
                                <td>{user.formNo}</td>
                                <td> <img src={`http://localhost:9000/${user.customerImagePath}`} alt="subject_photo" style={{
                                    width: "auto",
                                    height: "4em"
                                }} />
                                </td>
                                <td>
                                    {(auth.user.roleName === "admin" || auth.user.roleName === "hdm") && (
                                        <div className="d-flex justify-content-around flex-wrap"
                                        >



                                            <span style={{

                                                marginTop: ".8em",

                                            }}>
                                                <Link to={`/monthlySubscriber/Details/${user._id}`} className="fas fa-info-circle fa-2x"

                                                >

                                                </Link>
                                            </span>









                                            <span style={{
                                              
                                                marginTop: ".8em",

                                            }}>
                                                
                                                <Link to={`/editMonthly/edit/${user._id}`} className="far fa-edit fa-2x" 
                                                style={{
                                                    color:"yellow"
                                                }}
                                                
                                                >
                                                </Link>
                                            </span>











                                            <div
                                                onClick={() => { deleteMethod(user._id) }}
                                                style={{
                                
                                                    marginTop: ".8em"


                                                }}
                                            >
                                                <i className="fas fa-trash-alt fa-2x " style={
                                                    {
                                                        color: "red"
                                                    }
                                                } ></i>
                                            </div>

                                        </div>

                                    )
                                    }

                                </td>

                            </tr>
                        </tbody>
                    </table>




                </div>
            )
        })


    }


    return (

        <div>

            <Navbar />
            <div className="text-center container mt-3"><b>MONTHLY SUSCRIBERS</b></div>
            {userData.length === 0 && <div>No user in the database....</div>}

            {userData && <div>


                <div className="table-responsive" style={{
                    overflowX: "auto"
                }}>
                    {displayMonthlyAccount()}
                </div>



            </div>}



        </div>

    )
}

export default MonthlyContributionTable
