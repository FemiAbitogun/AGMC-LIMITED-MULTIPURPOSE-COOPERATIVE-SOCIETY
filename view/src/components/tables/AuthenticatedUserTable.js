import React, { useEffect,useContext } from 'react'
import Navbar from '../Navbar';
import { authorized } from '../../context/AuthContext';
function AuthenticatedUserTable() {

    const {getAuthenticatedUsers,deleteMethod,userData} =useContext(authorized)

    useEffect(() => {
        getAuthenticatedUsers();
    }, []);

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
                <Navbar/>
            </div>


            <div className="conatainer row">
                <div className="col-12">
                    { userData && display()}
                </div>

            </div>


        </div>

    )

}

export default AuthenticatedUserTable
