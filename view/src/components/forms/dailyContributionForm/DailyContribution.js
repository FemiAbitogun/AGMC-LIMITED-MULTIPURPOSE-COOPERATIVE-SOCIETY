import React, { useState, useContext } from 'react'
import { dailyContext } from '../../../context/marketing/DailyContribution';
import { useHistory } from 'react-router-dom'




function DailyContributionForm() {


    const history = useHistory();

    const [cardNo, setCardNo] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [zone, setZone] = useState('');
    const [referralCode, setReferralCode] = useState('');


    const [contribution, setContribution] = useState('');
    const [dateOfRegistration, setDateOfRegistration] = useState('');
    const [dateOfFirstContribution, setDateOfFirstContribution] = useState('');






    const { getDailyContributor, _submit } = useContext(dailyContext);

    const submit = async (e) => {

        const body = {
            cardNo,
            fullName,
            phoneNumber,
            amount,
            zone,
            referralCode,

            contribution,
            dateOfRegistration,
            dateOfFirstContribution

        }
        _submit(body)
        getDailyContributor();

history.push("/dailyContributionTable")
    }


    return (
        <div className="container">

            <div className="row ">

                <div className="col-sm-3">
                    <input type="text" name="registrationNumber" onChange={function (e) {
                        setCardNo(e.target.value);
                    }} placeholder="cardNo" className="form-control" />
                </div>

                <div className="col-sm-9">
                    <input type="text" name="fullName" onChange={function (e) {
                        setFullName(e.target.value);
                    }} placeholder="full Name" className="form-control" />
                </div>


            </div>


            <div className="row  mt-4">

                <div className="col-sm-3">
                    <input type="text" name="phoneNumber" onChange={function (e) {
                        setPhoneNumber(e.target.value);
                    }} placeholder="Phone Number" className="form-control" />
                </div>

                <div className="col-sm-3">
                    <input type="text" name="amount" onChange={function (e) {
                        setAmount(e.target.value);
                    }} placeholder="Registration Amount" className="form-control" />
                </div>

                <div className="col-sm-3">
                    <input type="text" name="zone" onChange={function (e) {
                        setZone(e.target.value);
                    }} placeholder="Zone" className="form-control" />
                </div>

                <div className="col-sm-3">
                    <input type="text" name="referralCode" onChange={function (e) {
                        setReferralCode(e.target.value);
                    }} className="form-control"  placeholder="Referral Code" />
                </div>

            </div>



            <div className="row  mt-4">
                <div className="col-sm-3">
                    <label htmlFor="dateOfRegistration"><b> Date Of Registration</b></label>
                    <input type="date" name="dateOfRegistration" onChange={function (e) {
                        setDateOfRegistration(e.target.value);
                    }} className="form-control" />
                </div>


                <div className="col-sm-3">
                    <b> Date Of First Contribution</b>
                    <input type="date" name="dateOfFirstContribution" onChange={function (e) {
                        setDateOfFirstContribution(e.target.value);
                    }} className="form-control" />
                </div>




                {/* Contribution Plan*/}

                <div className="d-flex flex-wrap col-sm-6  justify-content-between  ">
                    <div>
                        <b>Contribution Plan</b>

                    </div>
                    <div>
                        <input type="radio" name="plan" onClick={(e) => { setContribution("#5,000") }} /> <span> #500</span>
                    </div>

                    <div>
                        <input type="radio" name="plan" onClick={(e) => { setContribution(" #10,000") }} /> <span> #1000</span>

                    </div>

                    <div>
                        <input type="radio" name="plan" onClick={(e) => { setContribution("#15,000") }} /><span>  #1500</span>

                    </div>

                    <div>
                        <input type="radio" name="plan" onClick={(e) => { setContribution(" #20,000") }} /><span>  #2000</span>

                    </div>

                </div>



            </div>


            <div className="row  mt-4">
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

export default DailyContributionForm
