
import React, { useContext, useEffect } from 'react'
import { authorized } from '../../context/AuthContext'
import Navbar from '../Navbar';


function Home() {

    const {checkOutSignedIn, auth} = useContext(authorized)
    

    return (
        <div>
            <h2 className="text-center mt-3 text-danger "> AGMCS HOMEPAGE</h2>

            {auth && <Navbar />}
        </div>
    )
}

export default Home
