import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import axios from 'axios';




function DailyContributionTable() {

    const [userData, setUserData] = useState([]);

    useEffect(() => {

        getDailyContributor();

    }, [userData])


    const getDailyContributor = async () => {
        var { data } = await axios.get("http://localhost:9000/api/dailyContribution/getAll")
        setUserData(data)
    }


    function deleteMethod(id) {
        axios.delete(`http://localhost:9000/api/dailyContribution/delete/${id}`);
        getDailyContributor();
    }



    function renderUsers() {

        return userData.map((user) => {

            return (
                <div key={user._id} className="container table mt-4">

                    <table className="table container">
                        <tbody>
                            <tr>
                                <th scope="row">Card No</th>
                                <td>{user.cardNo}</td>


                                <th scope="row">Full Name</th>
                                <td>{user.fullName}</td>


                                <th scope="row">Phone Number</th>
                                <td>{user.phoneNumber}</td>

                                <th scope="row">Amount</th>
                                <td>{user.amount}</td>

                                <th scope="row">Zone</th>
                                <td>{user.zone}</td>

                                <th scope="row">Referral Code</th>
                                <td>{user.referralCode}</td>
                        
                            </tr>

                        </tbody>
                    </table>


                    <input type="submit" value="delete" className="btn btn-success"
                        onClick={() => { deleteMethod(user._id) }} />

                    <span>
                    <span>
                        <button className="btn btn-warning m-3"><Link to={`/editDaily/edit/${user._id}`}>E D I T</Link> </button>
                    </span>

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

export default DailyContributionTable
