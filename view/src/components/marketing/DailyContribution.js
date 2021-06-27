import React, { useContext, useEffect, useState } from 'react'
import { authorized } from '../../context/AuthContext'
import DailyContributionForm from '../forms/dailyContributionForm/DailyContribution'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import DailyContributionTable from '../tables/DailyContributionTable'



function DailyContribution() {

  const { auth, setAuth, logOut } = useContext(authorized);
  const history = useHistory();
  const url = "http://localhost:9000/api/authenticateUser/confirm";


  useEffect(() => {

    async function checkOut() {
      let _name = localStorage.getItem("name");

      if (_name !== null) {
        const body = { name: _name }
        const { data } = await axios.post(url, body);
        if (data) {
          setAuth(data);
        }
      }



    }
    checkOut();
  },[])



  return (
    <div>
      <h2 className="text-center"> WELCOME TO DAILY CONTRIBUTION PAGE</h2>

      <div className="row container offset-9 mt-4">
        <div className="col-1">
          <input value="LOG OUT" onClick={() => logOut()} className="btn btn-danger " />
        </div>
      </div>

      <div className="row mt-4">
        <DailyContributionForm />
      </div>



      <div className="row mt-4">
        <DailyContributionTable />
      </div>




    </div>






  )
}

export default DailyContribution
