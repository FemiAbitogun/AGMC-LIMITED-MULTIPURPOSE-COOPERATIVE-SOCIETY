import React from 'react'

function SectionB() {
    return (
        <div>

            {/*  Preffer Days of meeting*/}
            <div className="row mt-4 container " >

                <div className="col-xs-4 ">
                    <h5>Preffer Days of meeting </h5>
                </div>

                <div className="col-xs-2">
                    <input type="radio" name="meeting" id="btnradio1" autocomplete="off" checked /> <span> Monday</span>
                </div>

                <div className="col-xs-2">
                    <input type="radio" name="meeting" id="btnradio2" autocomplete="off" /> <span> Tuesday</span>
                </div>

                <div className="col-xs-2">
                    <input type="radio" name="meeting" id="btnradio3" autocomplete="off" /><span>  Friday</span>

                </div>

                <div className="col-xs-2">
                    <input type="radio" name="meeting" id="btnradio4" autocomplete="off" /><span>  Saturday</span>

                </div>

            </div>



            {/* Contribution Plan*/}
            <div className="row mt-4 container " >

                <div className="col-4 ">
                    <h5>Contribution Plan</h5>
                </div>

                <div className="col-xs-2">
                    <input type="radio" name="plan" id="btnradio1" autocomplete="off" checked /> <span> #5000</span>
                </div>

                <div className="col-xs-2">
                    <input type="radio" name="plan" id="btnradio2" autocomplete="off" /> <span> #10000</span>
                </div>

                <div className="col-xs-2">
                    <input type="radio" name="plan" id="btnradio3" autocomplete="off" /><span>  #15000</span>

                </div>

            </div>

        </div>
    )
}

export default SectionB
