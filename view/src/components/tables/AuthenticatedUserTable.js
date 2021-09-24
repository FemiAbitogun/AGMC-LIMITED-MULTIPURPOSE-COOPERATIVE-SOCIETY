import React, { useEffect, useContext } from 'react'
import Navbar from '../Navbar';
import { authorized } from '../../context/AuthContext';
function AuthenticatedUserTable() {

    const { auth, getAuthenticatedUsers, deleteMethod, userData } = useContext(authorized)

    useEffect(() => {
        getAuthenticatedUsers();
    }, []);

    function display() {

        return userData.map(
            (user, index) => {

                return (
                    <div key={user._id}>

                        <table className="table table-dark table-striped  table-hover">

                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="row">Name</th>
                                    <th scope="row">Role Name</th>

                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.roleName}</td>
                                    <td>  {auth.user.roleName === "admin" && (
                                        <input type="submit" value="delete" className="btn btn-success"
                                            onClick={() => { deleteMethod(user._id) }} />
                                    )}</td>


                                </tr>

                            </tbody>
                        </table>



                    </div>
                )
            }
        )



    }



    return (
        <div>
            <Navbar />
            <div className="table-responsive">
                {userData && display()}
            </div>
        </div>

    )

}

export default AuthenticatedUserTable
