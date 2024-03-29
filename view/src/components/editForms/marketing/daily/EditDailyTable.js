import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams, useHistory } from 'react-router-dom';
import { dailyEdit } from '../../../../api/marketing/editAPIs/dailyEdit'
import Navbar from '../../../Navbar'





function EditDailyTable() {

    const history = useHistory();

    const { id } = useParams();


    useEffect(() => {

        async function _getDailySuscriberById() {
            await getDailySuscriberById()
        }
        _getDailySuscriberById();

    }, []);




    const [cardNo, setCardNo] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [zone, setZone] = useState('');
    const [referralCode, setReferralCode] = useState('');

    const [contribution, setContribution] = useState('');
    const [dateOfRegistration, setDateOfRegistration] = useState('');
    const [dateOfFirstContribution, setDateOfFirstContribution] = useState('');



    const [_data, setData] = useState("");


    async function getDailySuscriberById() {

        var { data } = await axios.get("http://localhost:9000/api/dailyContribution/" + id)

        try {


            if (data) {
                setData(data); // _data
                setCardNo(data.cardNo);
                setFullName(data.fullName);
                setPhoneNumber(data.phoneNumber);
                setAmount(data.amount);
                setReferralCode(data.referralCode);
                setZone(data.zone);

                setContribution(data.contribution);
                setDateOfFirstContribution(data.dateOfFirstContribution);
                setDateOfRegistration(data.dateOfRegistration);
            }
        }
        catch (err) {
            console.error(err.message)
        }

    }



    const submit = async (e) => {

        try {
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
            dailyEdit(body, id)
            return history.push('/daily')

        } catch (err) {
            console.log(err.message)

        }

    }



    function cancel() {
        history.push("/daily")
    }


    function display() {

        return (
            <div className="container mt-4">
                <div className="row ">

                    <div className="col-sm-3">
                        <input type="text" value={cardNo} onChange={function (e) {
                            setCardNo(e.target.value)
                        }} placeholder="cardNo" className="form-control" />
                    </div>

                    <div className="col-sm-3">
                        <input type="text" value={fullName} onChange={function (e) {
                            setFullName(e.target.value);
                        }} placeholder="full Name" className="form-control" />
                    </div>


                    <div className="col-sm-3">
                        <input type="text" value={phoneNumber} onChange={function (e) {
                            setPhoneNumber(e.target.value);
                        }} placeholder="Phone Number" className="form-control" />
                    </div>


                    <div className="col-sm-3">
                        <input type="text" value={amount} onChange={function (e) {
                            setAmount(e.target.value);
                        }} placeholder="Amount" className="form-control" />
                    </div>

                </div>


                <div className="row  mt-4">

                    <div className="col-sm-3">
                        <input type="text" value={zone} onChange={function (e) {
                            setZone(e.target.value);
                        }} placeholder="Zone" className="form-control" />
                    </div>

                    <div className="col-sm-3">
                        <input type="text" value={referralCode} onChange={function (e) {
                            setReferralCode(e.target.value);
                        }} placeholder="Referral Code" className="form-control" />
                    </div>


                    <div className="col-sm-6">
                        <input type="text" value={contribution} onChange={function (e) {
                            setContribution(e.target.value);
                        }} placeholder="Contribution Plan" className="form-control" />
                    </div>


                </div>




                <div className="row  mt-4">



                    <div className="col-sm-4">
                        <b> Date Of Registration</b>
                        <input type="date" value={dateOfRegistration} onChange={function (e) {
                            setDateOfRegistration(e.target.value);
                        }} className="form-control" />
                    </div>

                    <div className="col-sm-4">
                        <b> Date Of First Contribution</b>
                        <input type="date" value={dateOfFirstContribution} onChange={function (e) {
                            setDateOfFirstContribution(e.target.value);
                        }} className="form-control" />
                    </div>


                </div>









                <div className="row  mt-2">
                    <div className="col-sm-4">
                        <input type="button" className="btn btn-danger" value=" Edit " onClick={(e) => { submit(e) }} />
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
            <Navbar></Navbar>
            {_data ? display() : <div>Loading................</div>}
        </div>
    )
}

export default EditDailyTable
