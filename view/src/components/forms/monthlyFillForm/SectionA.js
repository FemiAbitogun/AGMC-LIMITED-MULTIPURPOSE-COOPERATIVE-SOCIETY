import React, { useState, createContext } from 'react'

export const formContext = createContext("");


function SectionA(props) {
    const [referalCode, setReferalCode] = useState("");

    const [customerImage, setCustomerImage] = useState("");
    const [branch, setBranch] = useState("");
    const [formNo, setFormNo] = useState("");
    const [fullName, setFullName] = useState("");
    const [residentialAddress, setResidentialAddress] = useState("");
    const [email, SetEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [occupation, setOccupation] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("");
    const [religion, setReligion] = useState("");
    const [gender, setGender] = useState("");
    const [birthday, setBirthday] = useState("");
    const [permanentHomeAddress, setPermanentHomeAddress] = useState("");
    const [stateOfOrigin, setStateOfOrigin] = useState("");
    const [LGA, setLGA] = useState("");
    const [homeTown, setHomeTown] = useState("");




    /** functions............. */

    function _setCustomerImage(value) { setCustomerImage(value) }
    function _setBranch(e) { setBranch(e.target.value) }
    function _setFormNo(e) { setFormNo(e.target.value) }
    function _setFullName(e) { setFullName(e.target.value) }
    function _setResidentialAddress(e) { setResidentialAddress(e.target.value) }
    function _SetEmail(e) { SetEmail(e.target.value) }
    function _setPhone(e) { setPhone(e.target.value) }
    function _setOccupation(e) { setOccupation(e.target.value) }

    // the radio buttons....................................... SINGLE OPTION
    function _setMaritalStatus(value) { setMaritalStatus(value) }
    function _setReligion(value) { setReligion(value) }
    function _setGender(value) { setGender(value) }

    function _setBirthday(e) { setBirthday(e.target.value) }
    function _setPermanentHomeAddress(e) { setPermanentHomeAddress(e.target.value) }
    function _setStateOfOrigin(e) { setStateOfOrigin(e.target.value) }
    function _setLGA(e) { setLGA(e.target.value) }
    function _setHomeTown(e) { setHomeTown(e.target.value) }



    return (
        <div>

            <div className="row container mb-3">
                <label htmlFor="ReferalCode" className="col-sm-2 col-form-label">Referal Code</label>
                <div className="col-sm-3">
                    <input type="text" onChange={(e) => { setReferalCode(e.target.value) }} className="form-control " />
                </div>
            </div>


            <div className="row container">
                <div className="col-sm-4">
                    <input type="file" name="customerImage" onChange={function (e) {
                        _setCustomerImage(e.target.files[0]);
                    }} className="form-control" />
                </div>
            </div>


            <div className="row mt-4 container"  >

                {/* state branch */}
                <div className="col-6 container">
                    <label htmlFor="branch" className="col-sm-4 col-form-label">State/Branch</label>
                    <div className="col-sm-8" >
                        <input type="text" onChange={(e) => { _setBranch(e) }} className="form-control " />
                    </div>
                </div>

                {/* form number */}
                <div className="col-6 container">
                    <label htmlFor="formNo" className="col-sm-4 col-form-label">Form No</label>
                    <div className="col-sm-8">
                        <input type="text" onChange={(e) => { _setFormNo(e) }} className="form-control " />
                    </div>
                </div>

            </div>


            {/* fullname */}
            <div className="row mt-4 container" >
                <div className="col-12">

                    <div className="col-sm-12" >
                        <input type="text" placeholder="Full Name" className="form-control " onChange={(e) => { _setFullName(e) }} />
                    </div>
                </div>

            </div>

            {/* residential address */}
            <div className="row mt-4 container" >
                <div className="col-sm-12" >
                    <input type="text" onChange={(e) => { _setResidentialAddress(e) }} className="form-control" placeholder="Residential Address" />
                </div>
            </div>

            {/* email address */}
            <div className="row mt-4 container" >
                <div className="col-sm-6" >
                    <input type="email" onChange={(e) => { _SetEmail(e) }} className="form-control" placeholder="Email Address" />
                </div>

                {/* phone number */}
                <div className="col-sm-6" >
                    <input type="text" onChange={(e) => { _setPhone(e) }} className="form-control" placeholder="Phone Number" />
                </div>

            </div>



            {/* occupation / businesss */}
            <div className="row mt-4 container" >
                <div className="col-sm-12" >
                    <input type="text" onChange={(e) => { _setOccupation(e) }} className="form-control" placeholder="occupation/business" />
                </div>
            </div>



            {/* marital status */}
            <div className="row mt-4 container " >

                <div className="col-sm-4 ">
                    <h5>Marital Status</h5>
                </div>


                <div className="row mt-4 container ">
                    <div className="col-xs-3">
                        <input type="radio" name="maritalStatus" onClick={(e) => { _setMaritalStatus("Married") }} /> <span>Married</span>
                    </div>

                    <div className="col-xs-3">
                        <input type="radio" name="maritalStatus" onClick={(e) => { _setMaritalStatus("Engaged") }} /> <span>Engaged</span>
                    </div>

                    <div className="col-xs-3">
                        <input type="radio" name="maritalStatus" onClick={(e) => { _setMaritalStatus("Single") }} /><span>Single</span>

                    </div>

                    <div className="col-xs-3">
                        <input type="radio" name="maritalStatus" onClick={(e) => { _setMaritalStatus("Divorced") }} /><span>Divorced</span>

                    </div>
                </div>


            </div>






            {/* gender */}


            <div className="row mt-4 container" >
                <div className="col-4 ">
                    <h5>Gender</h5>
                </div>

                <div className="col-2">
                    <input type="radio" name="gender" onClick={(e) => { _setGender("Male") }} /><span>Male</span>
                </div>

                <div className="col-2">
                    <input type="radio" name="gender" onClick={(e) => { _setGender("Female") }} /><span>Female</span>

                </div>
            </div>






            {/* religion */}


            <div className="row mt-4 container" >
                <div className="col-4 ">
                    <h5>Religion</h5>
                </div>

                <div className="col-2">
                    <input type="radio" name="religion" onClick={(e) => { _setReligion("Christian") }} /><span>Christian</span>
                </div>

                <div className="col-2">
                    <input type="radio" name="religion" onClick={(e) => { _setReligion("Muslim") }} /><span>Muslim</span>

                </div>


                <div className="col-2">
                    <input type="radio" name="religion" onClick={(e) => { _setReligion("Other") }} /><span> Other</span>
                </div>
            </div>




            {/* date of birth */}
            <div className="row mt-4 container" >
                <div className="col-4 mt-3 ">
                    <h5>Date of Birth</h5>
                </div>
                <div className="col-8 ">
                    <input type="date" onChange={(e) => { _setBirthday(e) }} className="form-control" />
                </div>
            </div>


            {/* permanent home address */}
            <div className="row mt-4 container" >
                <input type="text" onChange={(e) => { _setPermanentHomeAddress(e) }} placeholder="permanent home address " className="form-control" />
            </div>


            {/* state of origin local govt area */}
            <div className="row mt-4 container" >

                <div className="col-4">
                    <input type="text" onChange={(e) => { _setStateOfOrigin(e) }} placeholder="State of Origin " className="form-control" />
                </div>

                <div className="col-4">
                    <input type="text" onChange={(e) => { _setLGA(e) }} placeholder="LGA" className="form-control" />
                </div>

                <div className="col-4">
                    <input type="text" onChange={(e) => { _setHomeTown(e) }} placeholder="Home Town" className="form-control" />
                </div>
            </div>




            <formContext.Provider value={{
                referalCode,
                customerImage,
                branch,
                formNo,
                fullName,
                residentialAddress,
                email,
                phone,
                occupation,
                maritalStatus,
                religion,
                gender,
                birthday,
                permanentHomeAddress,
                stateOfOrigin,
                LGA,
                homeTown
            }}>
                {props.children}
            </formContext.Provider>

        </div>
    )
}

export default SectionA
