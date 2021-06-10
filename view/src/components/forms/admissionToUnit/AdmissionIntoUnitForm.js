import React, { useState, createContext } from 'react'
import { postAdmissionToUnitForm } from '../../../api/marketing/postAdmissionToUnitForm'






function AdmissionIntoUnitForm() {



    const [registrationNumber, setRegistrationNumber] = useState('');
    const [dateOfAdmission, setDateOfAdmission] = useState('');
    const [refferalFileNumber, setRefferalFileNumber] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [total, setTotal] = useState('');
    const [loanQualify, setLoanQualify] = useState('');



    const submit = async (e) => {

        const body = {
            registrationNumber,
            dateOfAdmission,
            refferalFileNumber,
            fullName,
            phoneNumber,
            fullName,
            phoneNumber,
            amount,
            total,
            loanQualify,
        }
        postAdmissionToUnitForm(body)

    }

    return (
        <div>
            <div className="row container ">

                <div className="col-sm-3">
                    <input type="text" name="registrationNumber" onChange={function (e) {
                        setRegistrationNumber(e.target.value);
                    }} placeholder="Registration Number" className="form-control" />
                </div>


                <div className="col-sm-3">
                    <input type="date" name="dateOfAdmission" onChange={function (e) {
                        setDateOfAdmission(e.target.value);
                    }} placeholder="Date Of Admission" className="form-control" />
                </div>


                <div className="col-sm-3">
                    <input type="text" name="refferalFileNumber" onChange={function (e) {
                        setRefferalFileNumber(e.target.value);
                    }} placeholder="Refferal File Number" className="form-control" />
                </div>

                <div className="col-sm-3">
                    <input type="text" name="fullName" onChange={function (e) {
                        setFullName(e.target.value);
                    }} placeholder="FullName" className="form-control" />
                </div>


            </div>


            <div className="container row mt-4">

                <div className="col-sm-3">
                    <input type="text" name="phoneNumber" onChange={function (e) {
                        setPhoneNumber(e.target.value);
                    }} placeholder="Phone Number" className="form-control" />
                </div>


                <div className="col-sm-3">
                    <input type="text" name="amount" onChange={function (e) {
                        setAmount(e.target.value);
                    }} placeholder="Amount" className="form-control" />
                </div>


                <div className="col-sm-3">
                    <input type="text" name="total" onChange={function (e) {
                        setTotal(e.target.value);
                    }} placeholder="Total" className="form-control" />
                </div>

                <div className="col-sm-3">
                    <input type="text" name="loanQualify" onChange={function (e) {
                        setLoanQualify(e.target.value);
                    }} placeholder="loan Qualify" className="form-control" />
                </div>


            </div>

            <div className="row container mt-4">
                <div className="col-12 offset-4">
                    <input type="button" value="SUBMIT" className="btn btn-danger"
                        onClick={(e) => {
                            e.preventDefault();
                            submit(e);
                        }}></input>
                </div>
            </div>




          
        </div>
    )
}

export default AdmissionIntoUnitForm

