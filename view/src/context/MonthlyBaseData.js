import React, { useContext, useEffect } from "react"
import { formContext } from "../components/forms/monthlyFillForm/SectionA"
import { formContextB } from "../components/forms/monthlyFillForm/SectionB"
import { formContextC } from "../components/forms/monthlyFillForm/SectionC"
import { formContextD } from "../components/forms/monthlyFillForm/SectionD"
import { postForm, postRef1Image, postRef2Image } from "../api/marketing/postMonthlyForm"
import { useHistory } from 'react-router-dom'
import { formContextRef1 } from "../components/forms/monthlyFillForm/Referee1"
import { formContextRef2 } from "../components/forms/monthlyFillForm/Referee2"
import { authorized } from "./AuthContext"




function MonthlyBaseData() {

    const history = useHistory();

    const { auth } = useContext(authorized)
    useEffect(() => {
        auth === "" && history.push('/')
    }, [])




    const {
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
        homeTown } = useContext(formContext);



    const { prefferDaysOfMeeting,
        contributionPlan } = useContext(formContextB);

    const { BVN, bankName,
        accountNumber,
        meansOfIdentification,
        idCardNo } = useContext(formContextC);

    const { kinFullname,
        kinAddress, kinEmail,
        kinOccupation,
        kinOfficeAddress,
        kinRelationshipType,
        kinYearOfrelationship } = useContext(formContextD)


    const {
        referee1Image,
        referee1FullName,
        referee1HomeAddress,
        referee1WorkAddress,
        referee1Business,
        referee1Email,
        referee1Religion,
        referee1Phone,
        referee1Relationship
    } = useContext(formContextRef1)


    const {
        referee2Image,
        referee2FullName,
        referee2HomeAddress,
        referee2WorkAddress,
        referee2Business,
        referee2Email,
        referee2Religion,
        referee2Phone,
        referee2Relationship
    } = useContext(formContextRef2)









    const sendToPostForm = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        const formDataRef1 = new FormData();
        const formDataRef2 = new FormData();





        try {

            formData.append("referalCode", referalCode);
            formData.append("customerImage", customerImage);
            formData.append("branch", branch);
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
            formData.append("prefferDaysOfMeeting", prefferDaysOfMeeting);
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
            formData.append("kinOccupation", kinOccupation);
            formData.append("kinOfficeAddress", kinOfficeAddress);
            formData.append("kinRelationshipType", kinRelationshipType);
            formData.append("kinYearOfrelationship", kinYearOfrelationship);




            formData.append("referee1FullName", referee1FullName);
            formData.append("referee1HomeAddress", referee1HomeAddress);
            formData.append("referee1WorkAddress", referee1WorkAddress);
            formData.append("referee1Business", referee1Business);
            formData.append("referee1Email", referee1Email);
            formData.append("referee1Religion", referee1Religion);
            formData.append("referee1Phone", referee1Phone);
            formData.append("referee1Relationship", referee1Relationship);


            formData.append("referee2FullName", referee2FullName);
            formData.append("referee2HomeAddress", referee2HomeAddress);
            formData.append("referee2WorkAddress", referee2WorkAddress);
            formData.append("referee2Business", referee2Business);
            formData.append("referee2Email", referee2Email);
            formData.append("referee2Religion", referee2Religion);
            formData.append("referee2Phone", referee2Phone);
            formData.append("referee2Relationship", referee2Relationship);








            //append ref1 image
            formDataRef1.append("referee1Image", referee1Image);

            //append ref2 image
            formDataRef2.append("referee2Image", referee2Image);



            postRef1Image(formDataRef1);
            postRef2Image(formDataRef2);
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
        <div className="row container mt-4">
            <div className="col-sm-4">
                <input type="button" className="btn btn-danger" value="Submit Form" onClick={(e) => { sendToPostForm(e) }} />
            </div>

            <div className="col-sm-4">
                <input type="button" className="btn btn-warning" value="Cancel Form" onClick={(e) => { cancel() }} />
            </div>
        </div>
    )
}

export default MonthlyBaseData
