import React, { useContext, useEffect } from 'react'
import { authorized } from '../../context/AuthContext'
import DailyContributionForm from '../forms/dailyContributionForm/DailyContribution'
import axios from 'axios'
import Marketing from '../pages/Marketing'
import DailyContributionProvider from '../../context/marketing/DailyContribution'



function DailyContribution() {

  const {  setAuth } = useContext(authorized);
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
  }, [])



  return (
    <div>

      <Marketing />




      <div className="container">
        <h2 className="text-center"> WELCOME TO DAILY CONTRIBUTION PAGE</h2>


        <div className="col-10">
          <DailyContributionProvider>
            <DailyContributionForm />
          </DailyContributionProvider>
        </div>

        

      </div>








    </div>






  )
}

export default DailyContribution
