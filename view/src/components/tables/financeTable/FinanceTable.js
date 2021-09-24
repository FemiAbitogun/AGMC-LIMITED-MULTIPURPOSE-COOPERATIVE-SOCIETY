
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar'
import { authorized } from '../../../context/AuthContext';


function FinanceTable() {

    const [userData, setUserData] = useState([]);
    const [isMounted, setisMounted] = useState(true);
    const { auth } = useContext(authorized);



    useEffect(() => {
        getFinanceData();

        return () => {
            setisMounted(false);
        }
    }, [userData]);


    const getFinanceData = async () => {
        if (isMounted) {
            var { data } = await axios.get("http://localhost:9000/api/finance")
            setUserData(data)
        }
        if (!isMounted) {
            return
        }
    }


    function deleteMethod(id) {
        axios.delete(`http://localhost:9000/api/finance/delete/${id}`);
        setisMounted(true);
        getFinanceData();

    }


    function renderUsers() {

        return userData.map((user, index) => {

            return (
                <div key={user._id}>

                    <table className="table table-dark table-striped  table-hover">

                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Form No</th>
                                <th scope="col">Refferal Code</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>

                            </tr>
                        </thead>

                        <tbody>

                            <tr>

                                <th scope="row">{index + 1}</th>
                                <td>{user.no}</td>
                                <td>{user.referralCode}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>

                                <td>
                                    <div >
                                        {
                                            (auth.user.roleName === "admin" || auth.user.roleName === "hdf") && (<span className="d-flex justify-content-around flex-wrap" >
                                                <input type="submit" value="delete" className="btn btn-danger"
                                                    onClick={() => { deleteMethod(user._id) }}
                                                />
                                                <button className="btn btn-warning "><Link to={`/editFinance/edit/${user._id}`}>EDIT</Link> </button>

                                                <button className="btn btn-primary "><Link to={`/financeDetails/${user._id}`}>DETAILS</Link> </button>
                                            </span>)

                                        }

                                    </div>



                                </td>
                            </tr>

                        </tbody>
                    </table>




                </div>)
        })

    }






    return (
        <div>
            <Navbar />
            <div className="table-responsive">
                {userData && renderUsers()}
            </div>



        </div>
    )
}

export default FinanceTable
