import React from 'react'
import SectionA from '../forms/monthlyApplication/SectionA'
import SectionB from '../forms/monthlyApplication/SectionB'
import SectionC from '../forms/monthlyApplication/SectionC'
import SectionD from '../forms/monthlyApplication/SectionD'

function MonthlyForm() {



    return (


        <div className="container">
            <h2 className="text-center">MONTHLY MEMBERSHIP APPLICATION FORM </h2>

            <h2 className="text-center mt-4 text-danger">SECTION A </h2>
            <SectionA />
            <h2 className="text-center mt-4 text-danger">SECTION B </h2>
            <SectionB />
            <h2 className="text-center mt-4 text-danger">SECTION C </h2>
            <SectionC />

            
            <h2 className="text-center mt-4 text-danger">SECTION D </h2>
            <h2 className="text-center mt-4 text-danger">Spouse / Next of Kin</h2>
            <SectionD />




        </div>




    )
}

export default MonthlyForm
