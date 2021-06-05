import React, { useContext, createContext } from "react"
import { formContext } from "../components/forms/monthlyFillForm/SectionA"
import { formContextB } from "../components/forms/monthlyFillForm/SectionB"
import { formContextC } from "../components/forms/monthlyFillForm/SectionC"
import { formContextD } from "../components/forms/monthlyFillForm/SectionD"
import { postForm } from "../api/postMonthlyForm"





function MonthlyBaseData() {

    const { customerImage,
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




    const sendToPostForm = async (e) => {
        e.preventDefault();
        const formData = new FormData();

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
        postForm(formData);
        
    }





    
    return (
        <div>
            <input type="button" value="submit form" onClick={(e) => { sendToPostForm(e) }} />
        </div>
    )
}

export default MonthlyBaseData
