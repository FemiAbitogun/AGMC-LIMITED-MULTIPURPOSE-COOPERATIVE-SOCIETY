import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams, useHistory } from 'react-router-dom';



import { editMonthlySuscriber, editCustomerImage, editRef2Image, editRef1Image } from "../../../../api/marketing/editAPIs/monthlySuscriberEdit"




function EditMonthlySuscriber() {


    const history = useHistory();

    const { id } = useParams();


    useEffect(() => {

        async function _getMonthlyAccountById() {
            await getMonthlyAccountById()
        }
        _getMonthlyAccountById();

    }, []);



    //text fields...........
    const [referalCode, setReferalCode] = useState("");
    const [customerImagePath, setCustomerImagePath] = useState("");
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

    //section b

    const [prefferDaysOfMeeting, setPrefferDaysOfMeeting] = useState("");
    const [contributionPlan, setContributionPlan] = useState("");



    //SECTION C

    const [BVN, setBVN] = useState("");
    const [bankName, setBankName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [meansOfIdentification, setMeansOfIdentification] = useState("");
    const [idCardNo, setIdCardNo] = useState("");


    // SECTION D

    const [kinFullname, setKinFullname] = useState("");
    const [kinPhone, setKinPhone] = useState("");
    const [kinAddress, setKinAddress] = useState("");
    const [kinEmail, setKinEmail] = useState("");
    const [kinOccupation, setKinOccupation] = useState("");
    const [kinOfficeAddress, setKinOfficeAddress] = useState("");
    const [kinRelationshipType, setKinRelationshipType] = useState("");
    const [kinYearOfrelationship, setKinYearOfrelationship] = useState("");


    //REFREE 1


    const [referee1ImagePath, setReferee1ImagePath] = useState("");
    const [referee1FullName, setReferee1FullName] = useState("");
    const [referee1HomeAddress, setReferee1HomeAddress] = useState("");
    const [referee1WorkAddress, setReferee1WorkAddress] = useState("");
    const [referee1Business, setReferee1Business] = useState("");
    const [referee1Email, setReferee1Email] = useState("");
    const [referee1Religion, setReferee1Religion] = useState("");
    const [referee1Phone, setReferee1Phone] = useState("");
    const [referee1Relationship, setReferee1Relationship] = useState("");

    // REFREEE 2
    const [referee2ImagePath, setReferee2ImagePath] = useState("");
    const [referee2FullName, setReferee2FullName] = useState("");
    const [referee2HomeAddress, setReferee2HomeAddress] = useState("");
    const [referee2WorkAddress, setReferee2WorkAddress] = useState("");
    const [referee2Business, setReferee2Business] = useState("");
    const [referee2Email, setReferee2Email] = useState("");
    const [referee2Religion, setReferee2Religion] = useState("");
    const [referee2Phone, setReferee2Phone] = useState("");
    const [referee2Relationship, setReferee2Relationship] = useState("");




    //photos
    const [customerPhoto, setCustomerPhoto] = useState("");
    const [referee1, setRef1Photo] = useState("");
    const [referee2, setRef2Photo] = useState("");


    const [_data, setData] = useState("");

    async function getMonthlyAccountById() {
        var { data } = await axios.get("http://localhost:9000/api/monthlyContribution/" + id)



        try {

            if (data) {
                setData(data)

                setReferalCode(data.referalCode);
                setCustomerImagePath(data.customerImagePath);
                setBranch(data.branch);
                setFormNo(data.formNo);
                setFullName(data.fullName);
                setResidentialAddress(data.residentialAddress);
                SetEmail(data.email);
                setPhone(data.phone);
                setOccupation(data.occupation);
                setMaritalStatus(data.maritalStatus);
                setReligion(data.religion);
                setGender(data.gender);
                setBirthday(data.birthday);
                setPermanentHomeAddress(data.permanentHomeAddress);
                setStateOfOrigin(data.stateOfOrigin);
                setLGA(data.LGA);
                setHomeTown(data.homeTown);

                //SECTION B
                setPrefferDaysOfMeeting(data.prefferDaysOfMeeting);
                setContributionPlan(data.contributionPlan);


                //SECTION C
                setBVN(data.BVN);
                setBankName(data.bankName);
                setAccountNumber(data.accountNumber);
                setMeansOfIdentification(data.meansOfIdentification);
                setIdCardNo(data.idCardNo);


                //SECTION D
                setKinFullname(data.kinFullname);
                setKinPhone(data.kinPhone);
                setKinAddress(data.kinAddress);
                setKinEmail(data.kinEmail);
                setKinOccupation(data.kinOccupation);
                setKinOfficeAddress(data.kinOfficeAddress);
                setKinRelationshipType(data.kinRelationshipType);
                setKinYearOfrelationship(data.kinYearOfrelationship);


                //REFERAL1 
                setReferee1ImagePath(data.referee1ImagePath);
                setReferee1FullName(data.referee1FullName);
                setReferee1HomeAddress(data.referee1HomeAddress);
                setReferee1WorkAddress(data.referee1WorkAddress);
                setReferee1Business(data.referee1Business);
                setReferee1Email(data.referee1Email);
                setReferee1Religion(data.referee1Religion);
                setReferee1Phone(data.referee1Phone);
                setReferee1Relationship(data.referee1Relationship);


                //REFERAL2
                setReferee2ImagePath(data.referee2ImagePath);
                setReferee2FullName(data.referee2FullName);
                setReferee2HomeAddress(data.referee2HomeAddress);
                setReferee2WorkAddress(data.referee2WorkAddress);
                setReferee2Business(data.referee2Business);
                setReferee2Email(data.referee2Email);
                setReferee2Religion(data.referee2Religion);
                setReferee2Phone(data.referee2Phone);
                setReferee2Relationship(data.referee2Relationship);


            }





        }
        catch (err) {

            return console.log(err.message)
        }



    }



    const sendToPatchForm = async (e) => {
        e.preventDefault();

        try {


            let body = {
                referalCode,
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
                homeTown,

                prefferDaysOfMeeting,
                contributionPlan,

                BVN, bankName, accountNumber,
                meansOfIdentification, idCardNo,


                kinFullname, kinPhone, kinAddress, kinEmail,
                kinOccupation,
                kinOfficeAddress,
                kinRelationshipType, kinYearOfrelationship,


                referee1FullName,
                referee1HomeAddress,
                referee1WorkAddress,
                referee1Business,
                referee1Email,
                referee1Religion,
                referee1Phone,
                referee1Relationship,

                referee2FullName,
                referee2HomeAddress,
                referee2WorkAddress,
                referee2Business,
                referee2Email,
                referee2Religion,
                referee2Phone,
                referee2Relationship

            }

           await editMonthlySuscriber(body, id);



            if (customerPhoto) {
                const editCustomerPhoto = new FormData();
                editCustomerPhoto.append("customerImage", customerPhoto)
                editCustomerImage(editCustomerPhoto, id);
            }


            //REF 1
            if (referee1) {
                const editREF1Photo = new FormData();
                editREF1Photo.append("referee1Image", referee1)
                editRef1Image(editREF1Photo, id);
            }


            //REF 2
            if (referee2) {
                const editREF2Photo = new FormData();
                editREF2Photo.append("referee2Image", referee2)
                editRef2Image(editREF2Photo, id);
            }

            
            return history.push('/monthlySuscriberTable')

        }



        catch (error) {
            console.log(error.message)
        }




    }









    // 

    function cancel() {
        history.push("/home")


        // 
    }






    function display() {

        return (
            <div>

                {/*  */}

                <div className="row container mt-3 mb-3">
                    <label htmlFor="ReferalCode" className="col-sm-2 col-form-label">Referal Code</label>
                    <div className="col-sm-3">
                        <input type="text" value={referalCode} onChange={(e) => { setReferalCode(e.target.value) }} className="form-control " />
                    </div>
                </div>

                <div className="row container mt-4">
                    <div className="col-sm-2 ">
                        <img src={`http://localhost:9000/${customerImagePath}`} />
                    </div>

                    <div className="col-sm-4  offset-2">
                        <input type="file" name="customerImage" onChange={function (e) {
                            setCustomerPhoto(e.target.files[0]);
                        }} className="form-control" />
                    </div>
                </div>




                <div className="row mt-4 container"  >

                    {/* state branch */}
                    <div className="col-6 container">
                        <label htmlFor="branch" className="col-sm-4 col-form-label">State/Branch</label>
                        <div className="col-sm-8" >
                            <input type="text" value={branch}
                                onChange={(e) => { setBranch(e.target.value) }} className="form-control " />
                        </div>
                    </div>

                    {/* form number */}
                    <div className="col-6 container">
                        <label htmlFor="formNo" className="col-sm-4 col-form-label">Form No</label>
                        <div className="col-sm-8">
                            <input type="text" value={formNo} onChange={(e) => { setFormNo(e.target.value) }} className="form-control " />
                        </div>
                    </div>

                </div>




                <div className="row mt-4 container" >

                    <label htmlFor="fullName" className="col-sm-2 col-form-label">Full Name</label>
                    <div className="col-sm-10" >
                        <input type="text" value={fullName} className="form-control " onChange={(e) => { setFullName(e.target.value) }} />

                    </div>

                </div>


                {/* residential address */}
                <div className="row mt-4 container" >
                    <label htmlFor="residential" className="col-sm-2 col-form-label">Residential Address</label>
                    <div className="col-sm-10" >
                        <input type="text" value={residentialAddress} onChange={(e) => { setResidentialAddress(e.target.value) }} className="form-control" />
                    </div>
                </div>



                {/* email address */}
                <div className="row mt-4 container" >
                    <div className="col-sm-6">
                        <div className="row" >
                            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" value={email} onChange={(e) => { SetEmail(e.target.value) }} className="form-control" />

                            </div>
                        </div>
                    </div>

                    {/* phone number */}

                    <div className="col-sm-6">
                        <div className="row" >
                            <label htmlFor="Phone" className="col-sm-2 col-form-label">Phone</label>
                            <div className="col-sm-10">
                                <input type="text" value={phone} onChange={(e) => { setPhone(e.target.value) }} className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>


                {/* occupation / businesss */}
                <div className="row mt-4 container" >
                    <label htmlFor="occupation" className="col-sm-2 col-form-label">Occupation</label>

                    <div className="col-sm-10" >
                        <input type="text" value={occupation} onChange={(e) => { setOccupation(e.target.value) }} className="form-control" />
                    </div>
                </div>





                {/* marital status */}
                <div className="row mt-4 container " >
                    <div className="col-sm-2">
                        <h5>Marital Status</h5>
                    </div>

                    <div className="col-sm-2">
                        <input type="radio" name="maritalStatus" onClick={(e) => { setMaritalStatus("Married") }} /> <span>Married</span>
                    </div>

                    <div className="col-sm-2">
                        <input type="radio" name="maritalStatus" onClick={(e) => { setMaritalStatus("Engaged") }} /> <span>Engaged</span>
                    </div>

                    <div className="col-sm-2">
                        <input type="radio" name="maritalStatus" onClick={(e) => { setMaritalStatus("Single") }} /><span>Single</span>

                    </div>

                    <div className="col-sm-2">
                        <input type="radio" name="maritalStatus" onClick={(e) => { setMaritalStatus("Divorced") }} /><span>Divorced</span>

                    </div>

                </div>




                {/* gender */}


                <div className="row mt-4 container" >
                    <div className="col-2 ">
                        <h5>Gender</h5>
                    </div>

                    <div className="col-2">
                        <input type="radio" name="gender" onClick={(e) => { setGender("Male") }} /><span>Male</span>
                    </div>

                    <div className="col-2">
                        <input type="radio" name="gender" onClick={(e) => { setGender("Female") }} /><span>Female</span>

                    </div>
                </div>


                <div className="row mt-4 container" >
                    <div className="col-2 ">
                        <h5>Religion</h5>
                    </div>

                    <div className="col-2">
                        <input type="radio" name="religion" onClick={(e) => { setReligion("Christian") }} /><span>Christian</span>
                    </div>

                    <div className="col-2">
                        <input type="radio" name="religion" onClick={(e) => { setReligion("Muslim") }} /><span>Muslim</span>

                    </div>


                    <div className="col-2">
                        <input type="radio" name="religion" onClick={(e) => { setReligion("Other") }} /><span> Other</span>
                    </div>
                </div>







                {/* date of birth */}
                <div className="row mt-4 container" >
                    <div className="col-4 mt-3 ">
                        <h5>Date of Birth</h5>
                    </div>
                    <div className="col-8 ">
                        <input value={birthday} type="date" onChange={(e) => { setBirthday(e.target.value) }} className="form-control" />
                    </div>
                </div>



                {/* permanent home address */}
                <div className="row mt-4 container" >
                    <label htmlFor="home" className="col-sm-2 col-form-label"> Permanent Home Address</label>
                    <input type="text" value={permanentHomeAddress} onChange={(e) => { setPermanentHomeAddress(e.target.value) }} className="form-control" />
                </div>


                {/* state of origin local govt area */}
                <div className="row mt-4 container" >

                    <div className="col-4">
                        <input value={stateOfOrigin} type="text" onChange={(e) => { setStateOfOrigin(e.target.value) }} placeholder="State of Origin " className="form-control" />
                    </div>

                    <div className="col-4">
                        <input value={LGA} type="text" onChange={(e) => { setLGA(e.target.value) }} placeholder="LGA" className="form-control" />
                    </div>

                    <div className="col-4">
                        <input value={homeTown} type="text" onChange={(e) => { setHomeTown(e.target.value) }} placeholder="Home Town" className="form-control" />
                    </div>
                </div>





                {/*  Preffer Days of meeting*/}
                <div className="row mt-4 container " >

                    <div className="col-sm-2 ">
                        <h5>Preffer Days of meeting </h5>
                    </div>

                    <div className="col-sm-2">
                        <input type="radio" name="meeting" onClick={(e) => { setPrefferDaysOfMeeting("Monday") }} /> <span> Monday</span>
                    </div>

                    <div className="col-sm-2">
                        <input type="radio" name="meeting" onClick={(e) => { setPrefferDaysOfMeeting("Tuesday") }} /> <span> Tuesday</span>
                    </div>

                    <div className="col-sm-2">
                        <input type="radio" name="meeting" onClick={(e) => { setPrefferDaysOfMeeting("Wednesday") }} /><span>  Wednesday</span>
                    </div>
                    <div className="col-sm-2">
                        <input type="radio" name="meeting" onClick={(e) => { setPrefferDaysOfMeeting("Friday") }} /><span>  Friday</span>
                    </div>

                    <div className="col-sm-2">
                        <input type="radio" name="meeting" onClick={(e) => { setPrefferDaysOfMeeting("Saturday") }} /><span>  Saturday</span>

                    </div>

                </div>







                {/* Contribution Plan*/}
                <div className="row mt-4 container " >

                    <div className="col-sm-4 ">
                        <h5>Contribution Plan</h5>
                    </div>

                    <div className="col-sm-2">
                        <input type="radio" name="plan" onClick={(e) => { setContributionPlan("#5,000") }} /> <span> #5,000</span>
                    </div>

                    <div className="col-sm-2">
                        <input type="radio" name="plan" onClick={(e) => { setContributionPlan(" #10,000") }} /> <span> #10,000</span>
                    </div>

                    <div className="col-sm-2">
                        <input type="radio" name="plan" onClick={(e) => { setContributionPlan("#15,000") }} /><span>  #15,000</span>
                    </div>

                    <div className="col-sm-2">
                        <input type="radio" name="plan" onClick={(e) => { setContributionPlan(" #20,000") }} /><span>  #20,000</span>
                    </div>

                </div>





                {/* BANK DETAIL*/}
                <div className="row mt-4 container form-group" >

                    <div className="col-xs-4">
                        <h5>Bank Details</h5>
                    </div>

                    <div className="col-xs-4 mb-3">
                        <input value={BVN} type="text" placeholder="BVN" className="form-control" required="required" onChange={(e) => { setBVN(e.target.value) }} />

                    </div>

                    <div className="col-xs-4">
                        <input value={bankName} type="text" placeholder="Bank Name" className="form-control" required="required" onChange={(e) => { setBankName(e.target.value) }} />
                    </div>

                </div>

                <div className="row  mt-3 container">

                    <div className="col-6">
                        <input value={accountNumber} type="text" placeholder="Account Number" className="form-control" required="required" onChange={(e) => { setAccountNumber(e.target.value) }} />
                    </div>
                </div>




                {/*  means of identification*/}
                <div className="row mt-4 container form-group" >


                    <div className="col-sm-3 ">
                        <h5>Means of Identification</h5>
                    </div>

                    <div className="col-sm-2">
                        <input type="radio" name="identification" onClick={(e) => { setMeansOfIdentification("National ID") }} /> <span> National ID</span>
                    </div>

                    <div className="col-sm-2">
                        <input type="radio" name="identification" onClick={(e) => { setMeansOfIdentification("Voters' Card") }} /> <span>Voters' Card</span>
                    </div>

                    <div className="col-sm-2">
                        <input type="radio" name="identification" onClick={(e) => { setMeansOfIdentification("Drivers License") }} /><span>Drivers License</span>

                    </div>

                    <div className="col-sm-3">
                        <input type="radio" name="identification" onClick={(e) => { setMeansOfIdentification("International Passport") }} /><span>International Passport</span>

                    </div>
                </div>

                {/* id card number */}
                <div className="row  mt-3 container">

                    <label htmlFor="CARDNO" className="col-sm-2 col-form-label mt-1">CARD NO</label>
                    <div className="col-sm-6">
                        <input type="text" value={idCardNo} placeholder="CARD NO" className="form-control" required
                            onChange={(e) => { setIdCardNo(e.target.value) }} />
                    </div>
                </div>




                {/* kin */}

                <div className="container row mt-4">
                    <h3>NEXT OF KIN INFO</h3>
                </div>
                {/*  Spouse/Next of Kin    fullname */}
                <div className="row mt-4 container" >
                    <div className="col-12">

                        <div className="col-sm-12" >
                            <input value={kinFullname} type="text" placeholder="Full Name" className="form-control" onChange={(e) => { setKinFullname(e.target.value) }} />
                        </div>
                    </div>

                </div>

                {/* residential address */}
                <div className="row mt-4 container" >
                    <div className="col-sm-12" >
                        <input value={kinAddress} type="text" className="form-control" placeholder="Residential Address" onChange={(e) => { setKinAddress(e.target.value) }} />
                    </div>
                </div>



                {/* email address */}
                <div className="row mt-4 container" >
                    <div className="col-sm-6" >
                        <input value={kinEmail} type="email" className="form-control" placeholder="Email Address" onChange={(e) => { setKinEmail(e.target.value) }} />
                    </div>

                    {/* phone number */}
                    <div className="col-sm-6" >
                        <input value={kinPhone} type="text" className="form-control" placeholder="Phone Number" onChange={(e) => { setKinPhone(e.target.value) }} />
                    </div>


                    {/* office addreess */}
                    <div className="row mt-4 container">
                        <div className="col-sm-12" >
                            <input value={kinOfficeAddress} type="text" className="form-control" placeholder="Office Address" onChange={(e) => { setKinOfficeAddress(e.target.value) }} />
                        </div>

                    </div>
                </div>






                {/* occupation / businesss */}
                <div className="row mt-4 container" >
                    <div className="col-sm-12" >
                        <input value={kinOccupation} type="text" className="form-control" placeholder="occupation/business" onChange={(e) => { setKinOccupation(e.target.value) }} />
                    </div>
                </div>






                {/* relations  and years of relationship*/}
                <div className="row mt-4 container" >
                    <div className="col-sm-12" >
                        <input value={kinOfficeAddress} type="text" className="form-control" placeholder="Kin Office Address" onChange={(e) => { setKinOfficeAddress(e.target.value) }} />
                    </div>



                </div>


                <div className="row mt-4 container">
                    <div className="col-sm-6" >
                        <input value={kinRelationshipType} type="text" className="form-control" placeholder="Relationship Type" onChange={(e) => { setKinRelationshipType(e.target.value) }} />
                    </div>


                    <div className="col-sm-6" >
                        <input value={kinYearOfrelationship} type="text" className="form-control" placeholder="Years of Relationship" onChange={(e) => { setKinYearOfrelationship(e.target.value) }} />
                    </div>
                </div>









                {/* referal..1 */}

                <div className="col-sm-3 mt-4 ">
                    <h5>REF 1</h5>
                </div>



                <div className="row container mt-4">
                    <div className="col-sm-2 ">
                        <div className="col-sm-2">
                            <img src={`http://localhost:9000/${referee1ImagePath}`} />
                        </div>
                    </div>
                    <div className="col-sm-4  offset-2">
                        <input type="file" name="customerImage" onChange={function (e) {
                            setRef1Photo(e.target.files[0]);
                        }} className="form-control" />
                    </div>
                </div>




                <div className="row mt-4 container form-group" >

                    <div className="col-xs-4 mb-3">
                        <input value={referee1FullName} type="text" placeholder="Full Name" className="form-control" required onChange={(e) => { setReferee1FullName(e.target.value) }} />

                    </div>

                    <div className="col-xs-4 mb-3">
                        <input value={referee1HomeAddress} type="text" placeholder="Home Address" className="form-control" required onChange={(e) => { setReferee1HomeAddress(e.target.value) }} />
                    </div>


                    <div className="col-xs-4 mb-3">
                        <input value={referee1WorkAddress} type="text" placeholder="Work Address" className="form-control" required onChange={(e) => { setReferee1WorkAddress(e.target.value) }} />
                    </div>

                </div>





                <div className="row container">

                    <div className="col-xs-3 mb-3">
                        <input value={referee1Business} type="text" placeholder="Business" className="form-control" required onChange={(e) => { setReferee1Business(e.target.value) }} />
                    </div>


                    <div className="col-xs-3 mb-3">
                        <input value={referee1Email} type="text" placeholder="Email" className="form-control" required onChange={(e) => { setReferee1Email(e.target.value) }} />
                    </div>



                    <div className="col-xs-3 mb-3">
                        <input value={referee1Religion} type="text" placeholder="Religion" className="form-control" required onChange={(e) => { setReferee1Religion(e.target.value) }} />
                    </div>


                    <div className="col-xs-3 mb-3">
                        <input value={referee1Phone} type="text" placeholder="Phone" className="form-control" required onChange={(e) => { setReferee1Phone(e.target.value) }} />
                    </div>

                </div>


                <div className="container row">
                    <div className="col-xs-5 mb-3">
                        <input value={referee1Relationship} type="text" placeholder="Relationship" className="form-control" required onChange={(e) => { setReferee1Relationship(e.target.value) }} />
                    </div>
                </div>















                {/* referal..2 */}


                <div className="col-sm-3 ">
                    <h5>REF 2</h5>
                </div>


                <div className="row container mt-4">

                    <div className="col-sm-2 ">
                        <div className="col-sm-2">
                            <img src={`http://localhost:9000/${referee2ImagePath}`} />
                        </div>
                    </div>


                    <div className="col-sm-4  offset-2">
                        <input type="file" name="customerImage" onChange={function (e) {
                            setRef2Photo(e.target.files[0]);
                        }} className="form-control" />
                    </div>

                </div>



                <div className="row mt-4 container form-group" >


                    <div className="col-xs-4 mb-3">
                        <input value={referee2FullName} type="text" placeholder="Full Name" className="form-control" required onChange={(e) => { setReferee2FullName(e.target.value) }} />

                    </div>

                    <div className="col-xs-4 mb-3">
                        <input value={referee2HomeAddress} type="text" placeholder="Home Address" className="form-control" required onChange={(e) => { setReferee2HomeAddress(e.target.value) }} />
                    </div>


                    <div className="col-xs-4 mb-3">
                        <input value={referee2WorkAddress} type="text" placeholder="Work Address" className="form-control" required onChange={(e) => { setReferee2WorkAddress(e.target.value) }} />
                    </div>

                </div>







                <div className="row container">

                    <div className="col-xs-3 mb-3">
                        <input value={referee2Business} type="text" placeholder="Business" className="form-control" required onChange={(e) => { setReferee2Business(e.target.value) }} />
                    </div>


                    <div className="col-xs-3 mb-3">
                        <input value={referee2Email} type="text" placeholder="Email" className="form-control" required onChange={(e) => { setReferee2Email(e.target.value) }} />
                    </div>



                    <div className="col-xs-3 mb-3">
                        <input value={referee2Religion} type="text" placeholder="Religion" className="form-control" required onChange={(e) => { setReferee2Religion(e.target.value) }} />
                    </div>


                    <div className="col-xs-3 mb-3">
                        <input value={referee2Phone} type="text" placeholder="Phone" className="form-control" required onChange={(e) => { setReferee2Phone(e.target.value) }} />
                    </div>

                </div>


                <div className="container row">
                    <div className="col-xs-5 mb-3">
                        <input value={referee2Relationship} type="text" placeholder="Relationship" className="form-control" required onChange={(e) => { setReferee2Relationship(e.target.value) }} />
                    </div>
                </div>



                <div className="row container mt-2">
                    <div className="col-sm-4">
                        <input type="button" className="btn btn-danger" value=" Edit " onClick={(e) => { sendToPatchForm(e) }} />
                    </div>

                    <div className="col-sm-4">
                        <input type="button" className="btn btn-warning" value="Cancel Edit" onClick={(e) => { cancel() }} />
                    </div>
                </div>












            </div>
        )

    }




    return (

        <div>

            {_data === "" ? <div>LOADING.....</div> : display()}



        </div>


    )





}

export default EditMonthlySuscriber
