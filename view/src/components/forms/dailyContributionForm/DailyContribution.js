import React, { useState, useContext } from 'react'
import { dailyContext } from '../../../context/marketing/DailyContribution';




function DailyContributionForm() {




    const [cardNo, setCardNo] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [zone, setZone] = useState('');
    const [referralCode, setReferralCode] = useState('');


    const { getDailyContributor, _submit } = useContext(dailyContext);

    const submit = async (e) => {

        const body = {
            cardNo,
            fullName,
            phoneNumber,
            amount,
            zone,
            referralCode,

        }
        _submit(body)
        getDailyContributor();

    }


    return (
        <div className="container">

            <div className="row ">

                <div className="col-sm-3">
                    <input type="text" name="registrationNumber" onChange={function (e) {
                        setCardNo(e.target.value);
                    }} placeholder="cardNo" className="form-control" />
                </div>

                <div className="col-sm-3">
                    <input type="text" name="fullName" onChange={function (e) {
                        setFullName(e.target.value);
                    }} placeholder="full Name" className="form-control" />
                </div>


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

            </div>


            <div className="row  mt-4">

                <div className="col-sm-6">
                    <input type="text" name="zone" onChange={function (e) {
                        setZone(e.target.value);
                    }} placeholder="Zone" className="form-control" />
                </div>

                <div className="col-sm-6">
                    <input type="text" name="referralCode" onChange={function (e) {
                        setReferralCode(e.target.value);
                    }} placeholder="Referral Code" className="form-control" />
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
