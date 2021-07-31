
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'

function ListDataTable() {
    return (
        <div>
            <Navbar></Navbar>
            <div className="d-flex flex-wrap justify-content-around p-2  ">
                <Link to="/monthlySuscriberTable" className="link-light btn btn-dark fw-bold p-3">Monthly List</Link >
                <Link to="/admissionToUnitTable" className="link-dark btn btn-light fw-bold p-3">Admission List</Link >
                <Link to="/dailyContributionTable" className="link-light btn btn-dark fw-bold p-3">Daily List</Link >


            </div>

        </div>
    )
}

export default ListDataTable
