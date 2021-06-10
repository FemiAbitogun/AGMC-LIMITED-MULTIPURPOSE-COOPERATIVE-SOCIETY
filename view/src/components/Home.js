
import React, { useContext, useEffect } from 'react'
import { authorized } from '../context/AuthContext'
import { useHistory } from 'react-router-dom';

function Home() {

    const { auth } = useContext(authorized)
    const history = useHistory();

    useEffect(() => {
        auth == "" && history.push('/')
    }, [])


    return (
        <div>

        </div>
    )
}

export default Home
