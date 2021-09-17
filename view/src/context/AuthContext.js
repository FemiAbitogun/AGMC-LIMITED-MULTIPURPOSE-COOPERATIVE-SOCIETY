import React, { useState, createContext, useEffect } from 'react'
import axios from 'axios';

export const authorized = createContext("");

function AuthContext(props) {

    const [userData, setUserData] = useState([]);
    const [auth, setAuth] = useState(undefined);

    async function checkOutSignedIn() {
        const { data } = await axios.post("http://localhost:9000/api/authenticateUser/confirm", null, {
            withCredentials: true
        });
        if (data) {
            setAuth(data);
        }
    }

    useEffect(() => {
        checkOutSignedIn();
    }, [])


    // login  with username and passwprd into server.....
    const ServerLogin = async (body) => {
        await axios.post("http://localhost:9000/api/authenticateUser/login", body, {
            withCredentials: true
        });
        await checkOutSignedIn();

    }


    const getAuthenticatedUsers = async () => {
        var { data } = await axios.get("http://localhost:9000/api/authenticateUser")
        setUserData(data)
    }

    function deleteMethod(id) {
        axios.delete(`http://localhost:9000/api/authenticateUser/delete/${id}`)
        getAuthenticatedUsers();
    }





    return (
        <div>
            <authorized.Provider value={{ checkOutSignedIn, ServerLogin, userData, auth, setAuth, getAuthenticatedUsers, deleteMethod }}>
                {props.children}
            </authorized.Provider>
        </div>
    )



}

export default AuthContext
