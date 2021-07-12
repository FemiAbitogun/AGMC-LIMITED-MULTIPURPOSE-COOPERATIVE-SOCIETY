import React, { useState, createContext, useEffect } from 'react'
import { useHistory } from 'react-router';
import axios from 'axios';

export const authorized = createContext("");
const url = "http://localhost:9000/api/authenticateUser/login";


function AuthContext(props) {
    
    const [userData, setUserData] = useState([]);
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
    const getAuthenticatedUsers = async () => {
        var {data } = await axios.get("http://localhost:9000/api/authenticateUser")
        setUserData(data)
    }

    function deleteMethod(id) {
        axios.delete(`http://localhost:9000/api/authenticateUser/delete/${id}`)
        getAuthenticatedUsers();
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

const history =useHistory();
    function logOut() {
        localStorage.setItem("name", "");
        setAuth("");
     return;
    }

    useEffect(() => {
        checkOut();
    }, [])


    return (
        <div>
            <authorized.Provider value={{ sendLoginUser,userData, auth,logOut, setAuth,getAuthenticatedUsers,deleteMethod }}>
                {props.children}
            </authorized.Provider>
        </div>
    )



}

export default AuthContext
