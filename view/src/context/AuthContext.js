import React, { useState, createContext, useEffect } from 'react'
import axios from 'axios';


export const authorized = createContext("");
const url = "http://localhost:9000/api/authenticateUser/login";


function AuthContext(props) {

    const [auth, setAuth] = useState("");
    const sendLoginUser = async (body) => {
        const { data } = await axios.post(url, body);
        if (data) {
            localStorage.setItem("name", data.user.name)
            setAuth(data);
        }
        else {
            localStorage.setItem("name", "");
            setAuth("");
        }

    }


    const url2 = "http://localhost:9000/api/authenticateUser/confirm";
    async function checkOut() {
        let _name = localStorage.getItem("name");

        if (_name !== "") {
            const body = { name: _name }
            const { data } = await axios.post(url2, body);
            if (data) {
                setAuth(data);
            }
        }

    }


    function logOut() {
        localStorage.setItem("name", "");
        setAuth("");
    }




    useEffect(() => {
        checkOut();
    }, [])


    return (
        <div>
            <authorized.Provider value={{ sendLoginUser, auth, setAuth, logOut }}>
                {props.children}
            </authorized.Provider>
        </div>
    )
}

export default AuthContext
