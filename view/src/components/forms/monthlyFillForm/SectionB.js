import React, { useState, createContext } from 'react'

export const formContextB = createContext("");



function SectionB(props) {


    // usestate
    const [prefferDaysOfMeeting, setMeeting] = useState("");
    const [contributionPlan, setContributionPlan] = useState("");

    //appending to formData object
    // formData.append("prefferDaysOfMeeting", prefferDaysOfMeeting);
    // formData.append("contributionPlan", contributionPlan);

    /** functions............. */
    function _setMeeting(value) { setMeeting(value) }
    function _setContributionPlan(value) { setContributionPlan(value) }



    return (
        <div>

            {/*  Preffer Days of meeting*/}
            <div className="row mt-4 container " >

                <div className="col-xs-2 ">
                    <h5>Preffer Days of meeting </h5>
                </div>

                <div className="col-xs-2">
                    <input type="radio" name="meeting" onClick={(e) => { _setMeeting("Monday") }} /> <span> Monday</span>
                </div>

                <div className="col-xs-2">
                    <input type="radio" name="meeting"  onClick={(e) => { _setMeeting("Tuesday") }} /> <span> Tuesday</span>
                </div>

                <div className="col-xs-2">
                    <input type="radio" name="meeting"  onClick={(e) => { _setMeeting("Wednesday") }} /><span>  Wednesday</span>
                </div>
                <div className="col-xs-2">
                    <input type="radio" name="meeting"  onClick={(e) => { _setMeeting("Friday") }} /><span>  Friday</span>
                </div>

                <div className="col-xs-2">
                    <input type="radio" name="meeting"  onClick={(e) => { _setMeeting("Saturday") }} /><span>  Saturday</span>

                </div>

            </div>



            {/* Contribution Plan*/}
            <div className="row mt-4 container " >

                <div className="col-sm-4 ">
                    <h5>Contribution Plan</h5>
                </div>

                <div className="col-xs-2">
                    <input type="radio" name="plan" onClick={(e) => { _setContributionPlan("#5,000") }} /> <span> #5,000</span>
                </div>

                <div className="col-xs-2">
                    <input type="radio" name="plan" onClick={(e) => { _setContributionPlan(" #10,000") }} /> <span> #10,000</span>
                </div>

                <div className="col-xs-2">
                    <input type="radio" name="plan"  onClick={(e) => { _setContributionPlan("#15,000") }} /><span>  #15,000</span>
                </div>

                <div className="col-xs-2">
                    <input type="radio" name="plan" onClick={(e) => { _setContributionPlan(" #20,000") }} /><span>  #20,000</span>
                </div>

            </div>



            <formContextB.Provider value={{
                prefferDaysOfMeeting,
                contributionPlan,
            }}>
                {props.children}
            </formContextB.Provider>







        </div>
    )
}

export default SectionB
