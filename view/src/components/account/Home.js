
import React, { useContext, useEffect } from 'react'
import { authorized } from '../../context/AuthContext'
import { useHistory } from 'react-router-dom';
import Navbar from '../Navbar';

import axios from 'axios'

function Home() {

    const { auth, setAuth } = useContext(authorized)
    const history = useHistory();

    const url2 = "http://localhost:9000/api/authenticateUser/confirm";

    useEffect(() => {
        async function checkOut() {
            let _name = localStorage.getItem("name");

            if (_name !== "") {
                const body = { name: _name }
                const { data } = await axios.post(url2, body);
                if (data) {
                    setAuth(data);
                }
            }

            else if (_name === "") {
                auth === "" && history.push('/')
            }
        }
        checkOut();
    }, [])




    return (
        <div>
            <h2 className="text-center mt-3 text-danger "> AGMCS HOMEPAGE</h2>

            {auth && <Navbar />}
        </div>
    )
}

export default Home
