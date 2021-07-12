import React, { createContext, useState,useEffect } from 'react'
import axios from 'axios';
import {postDailyContribution} from '../../api/marketing/postDailyContribution'


export const dailyContext = createContext();

function DailyContributionProvider(props) {

    const [userData, setUserData] = useState([]);

  

    const getDailyContributor = async () => {
        var { data } = await axios.get("http://localhost:9000/api/dailyContribution/getAll")
        setUserData(data)

    }

    useEffect(()=>{
        getDailyContributor();

    },[getDailyContributor])

   async function deleteMethod(id) {
       axios.delete(`http://localhost:9000/api/dailyContribution/delete/${id}`);      
       await getDailyContributor();
    }



    const _submit = async (body) => {

        
        postDailyContribution(body)
      

    }


    return (

        <div>
            <dailyContext.Provider value={{ getDailyContributor, deleteMethod, userData, setUserData,_submit }}>
                {props.children}
            </dailyContext.Provider>

        </div>
    )
}

export default DailyContributionProvider


