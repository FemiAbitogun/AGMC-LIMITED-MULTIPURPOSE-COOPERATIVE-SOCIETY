import React from 'react'

function SectionA() {










    return (
        <div>

            <div className="row container">

                <input type="file" className="form-control"/>

            </div>


            <div className="row mt-4 container"  >

                {/* state branch */}
                <div className="col-6 container">
                    <label for="branch" className="col-sm-4 col-form-label">State/Branch</label>
                    <div className="col-sm-8" >
                        <input type="text" id="branch" className="form-control " />
                    </div>
                </div>

                {/* form number */}
                <div className="col-6 container">
                    <label for="formNo" className="col-sm-4 col-form-label">Form No</label>
                    <div className="col-sm-8">
                        <input type="text" id="formNo" className="form-control " />
                    </div>
                </div>

            </div>


            {/* fullname */}
            <div className="row mt-4 container" >
                <div className="col-12">

                    <div className="col-sm-12" >
                        <input type="text" placeholder="Full Name" id="fullName" className="form-control " />
                    </div>
                </div>

            </div>

            {/* residential address */}
            <div className="row mt-4 container" >
                <div className="col-sm-12" >
                    <input type="text" id="residential" className="form-control" placeholder="Residential Address" />
                </div>
            </div>

            {/* email address */}
            <div className="row mt-4 container" >
                <div className="col-sm-6" >
                    <input type="email" id="email" className="form-control" placeholder="Email Address" />
                </div>

                {/* phone number */}
                <div className="col-sm-6" >
                    <input type="text" id="Phone" className="form-control" placeholder="Phone Number" />
                </div>

            </div>



            {/* occupation / businesss */}
            <div className="row mt-4 container" >
                <div className="col-sm-12" >
                    <input type="text" id="occupation" className="form-control" placeholder="occupation/business" />
                </div>
            </div>



            {/* marital status */}
            <div className="row mt-4 container " >

                <div className="col-4 ">
                    <h5>Marital Status</h5>
                </div>

                <div className="col-2">
                    <input type="radio" name="maritalStatus" id="btnradio1" autocomplete="off" checked /> <span>Married</span>
                </div>

                <div className="col-2">
                    <input type="radio" name="maritalStatus" id="btnradio2" autocomplete="off" /> <span> Engaged</span>
                </div>

                <div className="col-2">
                    <input type="radio" name="maritalStatus" id="btnradio3" autocomplete="off" /><span>Single</span>

                </div>

                <div className="col-2">
                    <input type="radio" name="maritalStatus" id="btnradio4" autocomplete="off" /><span>Divorced</span>

                </div>

            </div>






            {/* gender */}


            <div className="row mt-4 container" >
                <div className="col-4 ">
                    <h5>Gender</h5>
                </div>

                <div className="col-2">
                    <input type="radio" name="gender" id="btnradio5" autocomplete="off" /><span>Male</span>
                </div>

                <div className="col-2">
                    <input type="radio" name="gender" id="btnradio6" autocomplete="off" /><span>Female</span>

                </div>
            </div>






            {/* religion */}


            <div className="row mt-4 container" >
                <div className="col-4 ">
                    <h5>Religion</h5>
                </div>

                <div className="col-2">
                    <input type="radio" name="religion" id="btnradio7" autocomplete="off" /><span>Christian</span>
                </div>

                <div className="col-2">
                    <input type="radio" name="religion" id="btnradio8" autocomplete="off" /><span>Muslim</span>

                </div>


                <div className="col-2">
                    <input type="radio" name="religion" id="btnradio8" autocomplete="off" /><span> Other</span>
                </div>
            </div>




            {/* date of birth */}
            <div className="row mt-4 container" >
                <div className="col-4 mt-3 ">
                    <h5>Date of Birth</h5>
                </div>
                <div className="col-8 ">
                    <input type="date" className="form-control" />
                </div>
            </div>


            {/* permanent home address */}
            <div className="row mt-4 container" >
                <input type="text" placeholder="permanent home address " className="form-control" />

            </div>


            {/* permanent home address */}
            <div className="row mt-4 container" >

                <div className="col-4">
                    <input type="text" placeholder="State of Origin " className="form-control" />
                </div>

                <div className="col-4">
                    <input type="text" placeholder="LGA" className="form-control" />
                </div>

                <div className="col-4">
                    <input type="text" placeholder="Home Town" className="form-control" />
                </div>
            </div>







        </div>
    )
}

export default SectionA
