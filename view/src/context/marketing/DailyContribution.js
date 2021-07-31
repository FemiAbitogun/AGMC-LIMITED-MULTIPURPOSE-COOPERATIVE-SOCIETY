import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';
import { postDailyContribution } from '../../api/marketing/postDailyContribution'


export const dailyContext = createContext();

function DailyContributionProvider(props) {

    const [userData, setUserData] = useState([]);
    const [isMounted, setisMounted] = useState(true);

    const getDailyContributor = async () => {
        if (isMounted) {
            var { data } = await axios.get("http://localhost:9000/api/dailyContribution/getAll")
            setUserData(data)
        }

        if (!isMounted) {
            return
        }
    }

    useEffect(() => {
        getDailyContributor();
        setisMounted(false);
    });

    async function deleteMethod(id) {
        axios.delete(`http://localhost:9000/api/dailyContribution/delete/${id}`);
        setisMounted(true)
        getDailyContributor();
    }




    const _submit = async (body) => {

        await postDailyContribution(body)
        getDailyContributor();


    }


    return (

        <div>
            <dailyContext.Provider value={{ getDailyContributor, deleteMethod, userData, setUserData, _submit }}>
                {props.children}
            </dailyContext.Provider>

        </div>
    )
}

export default DailyContributionProvider


