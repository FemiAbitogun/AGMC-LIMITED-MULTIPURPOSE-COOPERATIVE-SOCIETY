import React from 'react'

function SectionD() {
    return (
        <div>


            {/*  Spouse/Next of Kin    fullname */}
            <div className="row mt-4 container" >
                <div className="col-12">

                    <div className="col-sm-12" >
                        <input type="text" placeholder="Full Name" className="form-control " />
                    </div>
                </div>

            </div>

            {/* residential address */}
            <div className="row mt-4 container" >
                <div className="col-sm-12" >
                    <input type="text" className="form-control" placeholder="Residential Address" />
                </div>
            </div>

            {/* email address */}
            <div className="row mt-4 container" >
                <div className="col-sm-6" >
                    <input type="email" className="form-control" placeholder="Email Address" />
                </div>

                {/* phone number */}
                <div className="col-sm-6" >
                    <input type="text" className="form-control" placeholder="Phone Number" />
                </div>

            </div>



            {/* occupation / businesss */}
            <div className="row mt-4 container" >
                <div className="col-sm-12" >
                    <input type="text" className="form-control" placeholder="occupation/business" />
                </div>
            </div>



            {/* relations  and years of relationship*/}
            <div className="row mt-4 container" >
                <div className="col-sm-6" >
                    <input type="text" className="form-control" placeholder="Relationship" />
                </div>


                <div className="col-sm-6" >
                    <input type="text" className="form-control" placeholder="Years of Relationship" />
                </div>

            </div>






        </div>
    )
}

export default SectionD
