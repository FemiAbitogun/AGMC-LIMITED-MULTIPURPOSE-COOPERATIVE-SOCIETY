import React from 'react'

function SectionC() {
    return (
        <div>


            {/*  Preffer Days of meeting*/}
            <div className="row mt-4 container form-group" >

                <div className="col-xs-4">
                    <h5>Bank Details</h5>
                </div>

                <div className="col-xs-4 mb-3">
                    <input type="text" placeholder="BVN" className="form-control" required />

                </div>

                <div className="col-xs-4">
                    <input type="text" placeholder="Bank Name" className="form-control" required />
                </div>

            </div>


            <div className="row  mt-3 container">

                <div className="col-6">
                    <input type="text" placeholder="Account Number" className="form-control" required />
                </div>
            </div>





            {/*  means of identification*/}
            <div className="row mt-4 container form-group" >


                <div className="col-4 ">
                    <h5>Means of Identification</h5>
                </div>

                <div className="col-xs-2">
                    <input type="radio" name="identification"  autocomplete="off" checked /> <span> National ID</span>
                </div>

                <div className="col-xs-2">
                    <input type="radio" name="identification"  autocomplete="off" /> <span>Voters Card</span>
                </div>

                <div className="col-xs-2">
                    <input type="radio" name="identification" autocomplete="off" /><span>Drivers License</span>

                </div>

                <div className="col-xs-2">
                    <input type="radio" name="identification" autocomplete="off" /><span>International Passport</span>

                </div>



            </div>

            {/* id card number */}
            <div className="row  mt-3 container">

                <div className="col-6">
                    <input type="text" placeholder="CARD NO" className="form-control" required />
                </div>
            </div>







        </div>





    )
}

export default SectionC
