import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { authorized } from '../../context/AuthContext';

function LogOut() {

    const history = useHistory();

    const { auth, setAuth } = useContext(authorized);
    function logOut() {
        localStorage.setItem("name", "");
        setAuth("");
        history.push("/");
    }





    return (
        <div>
            <div className="row container offset-9 mt-3">
                <div className="">
                    <input value="LOG OUT" onClick={() => logOut()} className="btn btn-danger " />
                </div>
            </div>
        </div>
    )
}

export default LogOut
