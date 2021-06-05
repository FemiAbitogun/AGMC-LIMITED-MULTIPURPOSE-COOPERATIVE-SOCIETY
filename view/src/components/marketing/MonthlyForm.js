import React from 'react'
import MonthlyBaseData from '../../context/MonthlyBaseData'
import SectionA from '../forms/monthlyFillForm/SectionA'
import SectionB from '../forms/monthlyFillForm/SectionB'
import SectionC from '../forms/monthlyFillForm/SectionC'
import SectionD from '../forms/monthlyFillForm/SectionD'

function MonthlyForm() {





    return (


        <div className="container">
            <h2 className="text-center">MONTHLY MEMBERSHIP APPLICATION FORM </h2>
            <h2 className="text-center mt-4 text-danger">SECTION A </h2>

            
            <SectionA>
                <h2 className="text-center mt-4 text-danger">SECTION B </h2>
                <SectionB>
                    <h2 className="text-center mt-4 text-danger">SECTION C </h2>
                    <SectionC>
                        <SectionD>
                            <h2 className="text-center mt-4 text-danger">SECTION D </h2>
                            <h2 className="text-center mt-4 text-danger">Spouse / Next of Kin</h2>
                            <MonthlyBaseData />
                        </SectionD>
                    </SectionC>
                </SectionB>
            </SectionA>








        </div>




    )
}

export default MonthlyForm
