import React, { useState, createContext } from 'react'

export const formContextD= createContext("");



function SectionD(props) {


    // usestate
    const [kinFullname, setKinFullname] = useState();

    const [kinAddress, setKinAddress] = useState();

    const [kinEmail, setKinEmail] = useState("");
    const [kinPhone, setKinPhone] = useState("");
    const [kinOccupation, setKinOccupation] = useState("");
    const [kinOfficeAddress, setKinOfficeAddress] = useState("");
    const [kinRelationshipType, setKinRelationshipType] = useState("");
    const [kinYearOfrelationship, setKinYearOfrelationship] = useState("");



    /** functions............. */
    function _setKinFullname(value) { setKinFullname(value) }
    function _setKinAddress(value) { setKinAddress(value) }

    function _setKinEmail(value) { setKinEmail(value) }
    function _setKinPhone(value) { setKinPhone(value) }
    function _setKinOccupation(value) { setKinOccupation(value) }

    function _setKinOfficeAddress(value) { setKinOfficeAddress(value) }

    function _setKinRelationshipType(value) { setKinRelationshipType(value) }
    function _setKinYearOfrelationship(value) { setKinYearOfrelationship(value) }





    return (
        <div>


            {/*  Spouse/Next of Kin    fullname */}
            <div className="row mt-4 container" >
                <div className="col-12">

                    <div className="col-sm-12" >
                        <input type="text" placeholder="Full Name" className="form-control" onChange={(e) => { _setKinFullname(e.target.value) }} />
                    </div>
                </div>

            </div>

            {/* residential address */}
            <div className="row mt-4 container" >
                <div className="col-sm-12" >
                    <input type="text" className="form-control" placeholder="Residential Address" onChange={(e) => { _setKinAddress(e.target.value) }} />
                </div>
            </div>



            {/* email address */}
            <div className="row mt-4 container" >
                <div className="col-sm-6" >
                    <input type="email" className="form-control" placeholder="Email Address" onChange={(e) => { _setKinEmail(e.target.value) }} />
                </div>

                {/* phone number */}
                <div className="col-sm-6" >
                    <input type="text" className="form-control" placeholder="Phone Number" onChange={(e) => { _setKinPhone(e.target.value) }} />
                </div>

                <div className="row mt-4 container">
                    <div className="col-sm-12" >
                        <input type="text" className="form-control" placeholder="Office Address" onChange={(e) => { _setKinOfficeAddress(e.target.value) }} />
                    </div>

                </div>
            </div>






            {/* occupation / businesss */}
            <div className="row mt-4 container" >
                <div className="col-sm-12" >
                    <input type="text" className="form-control" placeholder="occupation/business" onChange={(e) => { _setKinOccupation(e.target.value) }} />
                </div>
            </div>






            {/* relations  and years of relationship*/}
            <div className="row mt-4 container" >
                <div className="col-sm-12" >
                    <input type="text" className="form-control" placeholder="Kin Office Address" onChange={(e) => { _setKinOfficeAddress(e.target.value) }} />
                </div>



            </div>


            <div className="row mt-4 container">
                <div className="col-sm-6" >
                    <input type="text" className="form-control" placeholder="Relationship Type" onChange={(e) => { _setKinRelationshipType(e.target.value) }} />
                </div>


                <div className="col-sm-6" >
                    <input type="text" className="form-control" placeholder="Years of Relationship" onChange={(e) => { _setKinYearOfrelationship(e.target.value) }} />
                </div>
            </div>

            <formContextD.Provider value={{
                kinFullname,kinPhone, kinAddress, kinEmail,
                 kinOccupation,
                 kinOfficeAddress, 
                 kinRelationshipType, kinYearOfrelationship,
            }}>
                {props.children}
            </formContextD.Provider>


        </div>
    )
}

export default SectionD
