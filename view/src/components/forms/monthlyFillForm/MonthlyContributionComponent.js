import React, { useState, useEffect, useContext } from 'react'
import { postForm, postRef1Image, postRef2Image } from '../../../api/marketing/postMonthlyForm'
import { useHistory } from 'react-router-dom'
import { authorized } from '../../../context/AuthContext'



function MonthlyContributionComponent() {
    const history = useHistory();


    const { auth } = useContext(authorized);
   

    
    const [referalCode, setReferalCode] = useState("");
    const [customerImage, setCustomerImage] = useState("");


    const [state, setState] = useState("");
    const [branch, setBranch] = useState("");
    const [formNo, setFormNo] = useState("");


    const [unitCode, setUnitCode] = useState("");



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

    // usestate
    // const [prefferDaysOfMeeting, setMeeting] = useState("");
    const [contributionPlan, setContributionPlan] = useState("");


    const [BVN, setBVN] = useState("");
    const [bankName, setBankName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [meansOfIdentification, setMeansOfIdentification] = useState("");
    const [idCardNo, setIdCardNo] = useState("");

    // usestate
    const [kinFullname, setKinFullname] = useState("");
    const [kinAddress, setKinAddress] = useState("");
    const [kinEmail, setKinEmail] = useState("");
    const [kinPhone, setKinPhone] = useState("");
    const [kinOccupation, setKinOccupation] = useState("");
    const [kinOfficeAddress, setKinOfficeAddress] = useState("");
    const [kinRelationshipType, setKinRelationshipType] = useState("");
    const [kinYearOfrelationship, setKinYearOfrelationship] = useState("");


    const [referee1Image, setReferee1Image] = useState("");
    const [referee1FullName, setReferee1FullName] = useState([]);
    const [referee1HomeAddress, setReferee1HomeAddress] = useState([]);
    const [referee1WorkAddress, setReferee1WorkAddress] = useState([]);
    const [referee1Business, setReferee1Business] = useState([]);
    const [referee1Email, setReferee1Email] = useState([]);
    const [referee1Religion, setReferee1Religion] = useState([]);
    const [referee1Phone, setReferee1Phone] = useState([]);
    const [referee1Relationship, setReferee1Relationship] = useState([]);


    const [referee2Image, setReferee2Image] = useState("");
    const [referee2FullName, setReferee2FullName] = useState([]);
    const [referee2HomeAddress, setReferee2HomeAddress] = useState([]);
    const [referee2WorkAddress, setReferee2WorkAddress] = useState([]);
    const [referee2Business, setReferee2Business] = useState([]);
    const [referee2Email, setReferee2Email] = useState([]);
    const [referee2Religion, setReferee2Religion] = useState([]);
    const [referee2Phone, setReferee2Phone] = useState([]);
    const [referee2Relationship, setReferee2Relationship] = useState([]);








    function SectionA() {
        /** functions............. */
        return (
            <div>
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



                        {/* state  */}
                        <div className="col-sm-3 ">
                            <label htmlFor="state" >State</label>
                            <input type="text" onChange={(e) => { setState(e) }} className="form-control " />
                        </div>


                        {/*  branch */}
                        <div className="col-sm-3 ">
                            <label htmlFor="branch" >Branch Code</label>
                            <input type="text" onChange={(e) => { _setBranch(e) }} className="form-control " />
                        </div>




                        {/* form number */}
                        <div className="col-sm-3 ">
                            <label htmlFor="formNo" >File No</label>

                            <input type="text" onChange={(e) => { _setFormNo(e) }} className="form-control " />

                        </div>



                        {/*  Unit Code */}
                        <div className="col-sm-3 ">
                            <label htmlFor="branch"> Unit Code </label>
                            <input type="text" readOnly value={unitCode} className="form-control " />
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




                </div>
            </div>
        )
    }

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




    function SectionB() {



        return (
            <div>

                {/*  Preffer Days of meeting*/}
                <div className="row mt-4 container " >

                    <div className="col-xs-2 ">
                        <h5>Preffer Days of meeting </h5>
                    </div>


                    <div className="col-xs-2">
                        <input type="radio" name="meeting" onClick={(e) => { setUnitCode("U01") }} /> <span> Monday</span>
                    </div>

                    <div className="col-xs-2">
                        <input type="radio" name="meeting" onClick={(e) => { setUnitCode("U02") }} /> <span> Tuesday</span>
                    </div>

                    <div className="col-xs-2">
                        <input type="radio" name="meeting" onClick={(e) => { setUnitCode("U03") }} /><span>  Wednesday</span>
                    </div>
                    <div className="col-xs-2">
                        <input type="radio" name="meeting" onClick={(e) => { setUnitCode("U04") }} /><span>  Friday</span>
                    </div>

                    <div className="col-xs-2">
                        <input type="radio" name="meeting" onClick={(e) => { setUnitCode("U05") }} /><span>  Saturday</span>

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
                        <input type="radio" name="plan" onClick={(e) => { _setContributionPlan("#15,000") }} /><span>  #15,000</span>
                    </div>

                    <div className="col-xs-2">
                        <input type="radio" name="plan" onClick={(e) => { _setContributionPlan(" #20,000") }} /><span>  #20,000</span>
                    </div>

                </div>







            </div>
        )
    }


    /** functions............. */

    function _setContributionPlan(value) { setContributionPlan(value) }







    function SectionC() {

        return (
            <div>


                {/* BANK DETAIL*/}
                <div className="row mt-4 container form-group" >

                    <div className="col-xs-4">
                        <h5>Bank Details</h5>
                    </div>

                    <div className="col-xs-4 mb-3">
                        <input type="text" placeholder="BVN" className="form-control" required onChange={(e) => { _setBVN(e.target.value) }} />

                    </div>

                    <div className="col-xs-4">
                        <input type="text" placeholder="Bank Name" className="form-control" required onChange={(e) => { _setBankName(e.target.value) }} />
                    </div>

                </div>

                <div className="row  mt-3 container">

                    <div className="col-6">
                        <input type="text" placeholder="Account Number" className="form-control" required onChange={(e) => { _setAccountNumber(e.target.value) }} />
                    </div>
                </div>





                {/*  means of identification*/}
                <div className="row mt-4 container form-group" >


                    <div className="col-4 ">
                        <h5>Means of Identification</h5>
                    </div>

                    <div className="col-xs-2">
                        <input type="radio" name="identification" onClick={(e) => { _setMeansOfIdentification("National ID") }} /> <span> National ID</span>
                    </div>

                    <div className="col-xs-2">
                        <input type="radio" name="identification" onClick={(e) => { _setMeansOfIdentification("Voters' Card") }} /> <span>Voters' Card</span>
                    </div>

                    <div className="col-xs-2">
                        <input type="radio" name="identification" onClick={(e) => { _setMeansOfIdentification("Drivers License") }} /><span>Drivers License</span>

                    </div>

                    <div className="col-xs-2">
                        <input type="radio" name="identification" onClick={(e) => { _setMeansOfIdentification("International Passport") }} /><span>International Passport</span>

                    </div>
                </div>






                {/* id card number */}
                <div className="row  mt-3 container">

                    <div className="col-6">
                        <input type="text" placeholder="CARD NO" className="form-control" required
                            onChange={(e) => { _setIdCardNo(e.target.value) }} />
                    </div>
                </div>
            </div>
        )
    }

    /** functions............. */
    function _setBVN(value) { setBVN(value) }
    function _setBankName(value) { setBankName(value) }
    function _setAccountNumber(value) { setAccountNumber(value) }

    function _setMeansOfIdentification(value) { setMeansOfIdentification(value) }
    function _setIdCardNo(value) { setIdCardNo(value) }





    function SectionD() {
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

            </div>
        )
    }

    /** functions............. */
    function _setKinFullname(value) { setKinFullname(value) }
    function _setKinAddress(value) { setKinAddress(value) }

    function _setKinEmail(value) { setKinEmail(value) }
    function _setKinPhone(value) { setKinPhone(value) }
    function _setKinOccupation(value) { setKinOccupation(value) }

    function _setKinOfficeAddress(value) { setKinOfficeAddress(value) }

    function _setKinRelationshipType(value) { setKinRelationshipType(value) }
    function _setKinYearOfrelationship(value) { setKinYearOfrelationship(value) }





    function Referee1() {

        return (
            <div>

                <div className="mt-4 mb-4"> <h5>Referee 1 Details</h5></div>

                <div className="row container">
                    <div className="col-sm-4">
                        <input type="file" onChange={function (e) {
                            setReferee1Image(e.target.files[0]);
                        }} className="form-control" />
                    </div>
                </div>



                <div className="row mt-4 container form-group" >

                    <div className="col-xs-4 mb-3">
                        <input type="text" placeholder="Full Name" className="form-control" required onChange={(e) => { setReferee1FullName(e.target.value) }} />

                    </div>

                    <div className="col-xs-4 mb-3">
                        <input type="text" placeholder="Home Address" className="form-control" required onChange={(e) => { setReferee1HomeAddress(e.target.value) }} />
                    </div>


                    <div className="col-xs-4 mb-3">
                        <input type="text" placeholder="Work Address" className="form-control" required onChange={(e) => { setReferee1WorkAddress(e.target.value) }} />
                    </div>

                </div>



                <div className="row container">

                    <div className="col-xs-3 mb-3">
                        <input type="text" placeholder="Business" className="form-control" required onChange={(e) => { setReferee1Business(e.target.value) }} />
                    </div>


                    <div className="col-xs-3 mb-3">
                        <input type="text" placeholder="Email" className="form-control" required onChange={(e) => { setReferee1Email(e.target.value) }} />
                    </div>



                    <div className="col-xs-3 mb-3">
                        <input type="text" placeholder="Religion" className="form-control" required onChange={(e) => { setReferee1Religion(e.target.value) }} />
                    </div>


                    <div className="col-xs-3 mb-3">
                        <input type="text" placeholder="Phone" className="form-control" required onChange={(e) => { setReferee1Phone(e.target.value) }} />
                    </div>

                </div>


                <div className="container row">
                    <div className="col-xs-5 mb-3">
                        <input type="text" placeholder="Relationship" className="form-control" required onChange={(e) => { setReferee1Relationship(e.target.value) }} />
                    </div>
                </div>
            </div>
        )
    }


    function Referee2() {


        return (
            <div>

                <div className="mt-4 mb-4"> <h5>Referee 2 Details</h5></div>

                <div className="row container">
                    <div className="col-sm-4">
                        <input type="file" onChange={function (e) {
                            setReferee2Image(e.target.files[0]);
                        }} className="form-control" />
                    </div>
                </div>



                <div className="row mt-4 container form-group" >

                    <div className="col-xs-4 mb-3">
                        <input type="text" placeholder="Full Name" className="form-control" required onChange={(e) => { setReferee2FullName(e.target.value) }} />

                    </div>

                    <div className="col-xs-4 mb-3">
                        <input type="text" placeholder="Home Address" className="form-control" required onChange={(e) => { setReferee2HomeAddress(e.target.value) }} />
                    </div>


                    <div className="col-xs-4 mb-3">
                        <input type="text" placeholder="Work Address" className="form-control" required onChange={(e) => { setReferee2WorkAddress(e.target.value) }} />
                    </div>

                </div>



                <div className="row container">

                    <div className="col-xs-3 mb-3">
                        <input type="text" placeholder="Business" className="form-control" required onChange={(e) => { setReferee2Business(e.target.value) }} />
                    </div>


                    <div className="col-xs-3 mb-3">
                        <input type="text" placeholder="Email" className="form-control" required onChange={(e) => { setReferee2Email(e.target.value) }} />
                    </div>



                    <div className="col-xs-3 mb-3">
                        <input type="text" placeholder="Religion" className="form-control" required onChange={(e) => { setReferee2Religion(e.target.value) }} />
                    </div>


                    <div className="col-xs-3 mb-3">
                        <input type="text" placeholder="Phone" className="form-control" required onChange={(e) => { setReferee2Phone(e.target.value) }} />
                    </div>

                </div>


                <div className="container row">
                    <div className="col-xs-5 mb-3">
                        <input type="text" placeholder="Relationship" className="form-control" required onChange={(e) => { setReferee2Relationship(e.target.value) }} />
                    </div>
                </div>
            </div>
        )
    }






    const sendToPostForm = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        try {

            formData.append("referalCode", referalCode);
            formData.append("customerImage", customerImage);




            formData.append("state", state);
            formData.append("branch", branch);
            // section b.....................
            formData.append("unitCode", unitCode);
            formData.append("formNo", formNo);





            formData.append("fullName", fullName);
            formData.append("residentialAddress", residentialAddress);
            formData.append("email", email);
            formData.append("phone", phone);
            formData.append("occupation", occupation);
            formData.append("maritalStatus", maritalStatus);
            formData.append("religion", religion);
            formData.append("gender", gender);
            formData.append("birthday", birthday);
            formData.append("permanentHomeAddress", permanentHomeAddress);
            formData.append("stateOfOrigin", stateOfOrigin);
            formData.append("LGA", LGA);
            formData.append("homeTown", homeTown);


            // section b.....................
            formData.append("contributionPlan", contributionPlan);

            //section c..........................
            formData.append("BVN", BVN);
            formData.append("accountNumber", accountNumber);
            formData.append("meansOfIdentification", meansOfIdentification);
            formData.append("idCardNo", idCardNo);
            formData.append("bankName", bankName);

            // secrion d..............................
            formData.append("kinFullname", kinFullname);
            formData.append("kinEmail", kinEmail);
            formData.append("kinAddress", kinAddress);
            formData.append("kinPhone", kinPhone);
            formData.append("kinOccupation", kinOccupation);
            formData.append("kinOfficeAddress", kinOfficeAddress);
            formData.append("kinRelationshipType", kinRelationshipType);
            formData.append("kinYearOfrelationship", kinYearOfrelationship);


            //reffree.....1

            formData.append("referee1FullName", referee1FullName);
            formData.append("referee1HomeAddress", referee1HomeAddress);
            formData.append("referee1WorkAddress", referee1WorkAddress);
            formData.append("referee1Business", referee1Business);
            formData.append("referee1Email", referee1Email);
            formData.append("referee1Religion", referee1Religion);
            formData.append("referee1Phone", referee1Phone);
            formData.append("referee1Relationship", referee1Relationship);

            //reffree.....2

            formData.append("referee2FullName", referee2FullName);
            formData.append("referee2HomeAddress", referee2HomeAddress);
            formData.append("referee2WorkAddress", referee2WorkAddress);
            formData.append("referee2Business", referee2Business);
            formData.append("referee2Email", referee2Email);
            formData.append("referee2Religion", referee2Religion);
            formData.append("referee2Phone", referee2Phone);
            formData.append("referee2Relationship", referee2Relationship);

            if (referee1Image) {
                const formDataRef1 = new FormData();
                formDataRef1.append("referee1Image", referee1Image);
                postRef1Image(formDataRef1);
            }


            if (referee2Image) {
                const formDataRef2 = new FormData();
                formDataRef2.append("referee2Image", referee2Image);
                postRef2Image(formDataRef2);
            }


            postForm(formData);

            history.push('/monthlySuscriberTable')


        }
        catch (error) {
            history.push('/monthlySuscriberTable')
        }

    }






    function cancel() {
        history.push("/home")
    }





    return (
        <div>
            {SectionA()}
            {SectionB()}
            {SectionC()}
            {SectionD()}
            {Referee1()}
            {Referee2()}

            <div className="row container mt-4">
                <div className="col-sm-4">
                    <input type="button" className="btn btn-danger" value="Submit Form" onClick={(e) => { sendToPostForm(e) }} />
                </div>

                <div className="col-sm-4">
                    <input type="button" className="btn btn-warning" value="Cancel Form" onClick={(e) => { cancel() }} />
                </div>
            </div>
        </div>
    )
}

export default MonthlyContributionComponent
