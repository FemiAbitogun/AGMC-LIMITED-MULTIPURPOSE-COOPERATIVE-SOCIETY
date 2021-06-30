import React, { useContext } from 'react'
import { authorized } from '../../context/AuthContext';

function LogOut() {

    const { auth,setAuth } = useContext(authorized);
    function logOut() {
        localStorage.setItem("name", "");
        setAuth("");
    }





    return (
        <div>
            <div className="row container offset-9 mt-4">
                <div className="col-1">
                    <input value="LOG OUT" onClick={() => logOut()} className="btn btn-danger " />
                </div>
            </div>
        </div>
    )
}

export default LogOut
