import React, { useEffect, useState } from 'react'
import axios from "axios"
import Navbar from '../Navbar';

function AuthenticatedUserTable() {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        getDailyContributor();
    }, [userData]);

    const getDailyContributor = async () => {
        var { data } = await axios.get("http://localhost:9000/api/authenticateUser")
        setUserData(data)
    }

    function deleteMethod(id) {
        axios.delete(`http://localhost:9000/api/authenticateUser/delete/${id}`)
        getDailyContributor();
    }


    function display() {

        return userData.map(
            (user) => {

                return (
                    <div key={user._id} className="container table mt-4">

                        <table className="table container">
                            <tbody>
                                <tr>
                                    <th scope="row">Name</th>
                                    <td>{user.name}</td>


                                    <th scope="row">Password</th>
                                    <td>{user.password}</td>


                                    <th scope="row">Role Name</th>
                                    <td>{user.roleName}</td>



                                </tr>

                            </tbody>
                        </table>

                        <input type="submit" value="delete" className="btn btn-success"
                            onClick={() => { deleteMethod(user._id) }} />

                        <br className="mt-4"></br>

                    </div>
                )
            }
        )



    }



    return (
        <div className="conatiner">
            <div className="conatiner row">
                <Navbar></Navbar>
            </div>


            <div className="conatainer row">
                <div className="col-12">
                    {display()}
                </div>

            </div>


        </div>

    )

}

export default AuthenticatedUserTable
