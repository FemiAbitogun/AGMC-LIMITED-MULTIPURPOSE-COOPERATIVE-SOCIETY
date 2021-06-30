import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import { editFinanceTable } from '../../../api/finance/editApiFinance/editFinance'
import axios from 'axios';
import Navbar from '../../Navbar';




function EditFinanceTable() {
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {

        async function _getFinanceDatatById() {
            await getFinanceDatatById()
        }
        _getFinanceDatatById();

    }, [])


    const [no, setNo] = useState('');
    const [referralCode, setReferralCode] = useState('');
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [BVN, setBVN] = useState('');
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [bankName, setBankName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [phone, setPhone] = useState('')
    const [contributionCategoryBeforeLoan, setContributionCategoryBeforeLoan] = useState('')
    const [totalAmountContributed, setTotalAmountContributed] = useState('')
    const [amountInWords, setAmountInWords] = useState('')
    const [amountOfLoanOrLoanRequestFigure, setAmountOfLoanOrLoanRequestFigure] = useState('')
    const [amountInWordsOfRequestLoan, setAmountInWordsOfRequestLoan] = useState('')
    const [isReligionSupportForLoan, setIsReligionSupportForLoan] = useState('')
    const [isEligibilty, setIsEligibilty] = useState('')
    const [isCanMakeContributionWhileServicingLoan, setIsCanMakeContributionWhileServicingLoan] = useState('')


    const [servicingLoanAmount, setServicingLoanAmount] = useState('')
    const [pickAmountOfLoanAfterRepayment, setPickAmountOfLoanAfterRepayment] = useState('')

    const [referralFullName, setReferralFullName] = useState('')
    const [referralPhone, setReferralPhone] = useState('')

    const [referralDateOfRegistration, setReferralDateOfRegistration] = useState('')
    const [referralDateOfAdmin, setReferralDateOfAdmin] = useState('')
    const [referralUnitCode, setReferralUnitCode] = useState('')




    const [_data, setData] = useState("");

    async function getFinanceDatatById() {

        //    /api/admission
        var { data } = await axios.get("http://localhost:9000/api/finance/" + id)

        try {
            if (data) {
                setData(data);
                setNo(data.no);
                setReferralCode(data.referralCode);
                setRegistrationNumber(data.registrationNumber);
                setBVN(data.BVN);
                setFirstName(data.firstName);
                setMiddleName(data.middleName);
                setBankName(data.bankName);
                setAccountNumber(data.accountNumber);
                setPhone(data.phone);
                setContributionCategoryBeforeLoan(data.contributionCategoryBeforeLoan);
                setTotalAmountContributed(data.totalAmountContributed);
                setAmountInWords(data.amountInWords);
                setAmountOfLoanOrLoanRequestFigure(data.amountOfLoanOrLoanRequestFigure);
                setAmountInWordsOfRequestLoan(data.amountInWordsOfRequestLoan);
                setIsReligionSupportForLoan(data.isReligionSupportForLoan);
                setIsEligibilty(data.isEligibilty);
                setIsCanMakeContributionWhileServicingLoan(data.isCanMakeContributionWhileServicingLoan);
                setServicingLoanAmount(data.servicingLoanAmount);
                setPickAmountOfLoanAfterRepayment(data.pickAmountOfLoanAfterRepayment);
                setReferralFullName(data.referralFullName);
                setReferralPhone(data.referralPhone);
                setReferralDateOfRegistration(data.referralDateOfRegistration);
                setReferralDateOfAdmin(data.referralDateOfAdmin);
                setReferralUnitCode(data.referralUnitCode);
            }
        }
        catch (err) {
            console.error(err.message)
        }

    }



    const submit = async (e) => {
        e.preventDefault()
        try {
            const body = {
                no,
                referralCode,
                registrationNumber,
                BVN,
                firstName,
                middleName,
                bankName,
                accountNumber,
                phone,
                contributionCategoryBeforeLoan,
                totalAmountContributed,
                amountInWords,
                amountOfLoanOrLoanRequestFigure,
                amountInWordsOfRequestLoan,
                isReligionSupportForLoan,
                isEligibilty,
                isCanMakeContributionWhileServicingLoan,
                servicingLoanAmount,
                pickAmountOfLoanAfterRepayment,
                referralFullName,
                referralPhone,
                referralDateOfRegistration,
                referralDateOfAdmin,
                referralUnitCode
            }
            await editFinanceTable(body, id)
            return history.push('/finance')
        }
        catch (err) { 

            console.error(err.message);
        }
    }

const cancel= (e)=>{

    history.push("/finance")
}



    function display() {
        return (

            <div className="container">

                <div className="container row mb-4">
                    <div className="col-sm-3">
                        <input type="text" value={no} onChange={function (e) {
                            setNo(e.target.value);
                        }} placeholder="No" className="form-control" />
                    </div>

                </div>


                <div className="row container ">

                    <div className="col-sm-3">
                        <input type="text" value={referralCode} onChange={function (e) {
                            setReferralCode(e.target.value);
                        }} placeholder="Referral Code" className="form-control" />
                    </div>


                    <div className="col-sm-3">
                        <input type="text" value={registrationNumber} name="registrationNumber" onChange={function (e) {
                            setRegistrationNumber(e.target.value);
                        }} placeholder="Registration Number" className="form-control" />
                    </div>

                    <div className="col-sm-3">
                        <input type="text" value={BVN} name="BVN" onChange={function (e) {
                            setBVN(e.target.value);
                        }} placeholder="BVN" className="form-control" />
                    </div>


                </div>


                <div className="container row mt-4">

                    <div className="col-sm-3">
                        <input type="text" value={firstName} name="first Name" onChange={function (e) {
                            setFirstName(e.target.value);
                        }} placeholder="first Name " className="form-control" />
                    </div>


                    <div className="col-sm-3">
                        <input type="text" value={middleName} name="Middle Name" onChange={function (e) {
                            setMiddleName(e.target.value);
                        }} placeholder="Middle Name" className="form-control" />
                    </div>

                    <div className="col-sm-3">
                        <input type="text" value={phone} name="phoneNumber" onChange={function (e) {
                            setPhone(e.target.value);
                        }} placeholder="Phone Number" className="form-control" />
                    </div>








                </div>


                <div className="container row  mt-4">

                    <div className="col-sm-6">
                        <input type="text" value={bankName} name="Bank Name" onChange={function (e) {
                            setBankName(e.target.value);
                        }} placeholder="Bank Name" className="form-control" />
                    </div>

                    <div className="col-sm-6">
                        <input type="text" value={accountNumber} name="Account Number" onChange={function (e) {
                            setAccountNumber(e.target.value);
                        }} placeholder="Account Number" className="form-control" />
                    </div>
                </div>

                {/*  */}


                <div className="container row mt-4">




                    <div className="col-sm-6 ">
                        <h5>Contribution Category Before Loan</h5>
                    </div>

                    <div className="col-xs-3">
                        <input type="radio" name="contributionCategoryBeforeLoan" onClick={(e) => { setContributionCategoryBeforeLoan("5000") }} /> <span><b>#5000</b></span>
                    </div>

                    <div className="col-xs-3">
                        <input type="radio" name="contributionCategoryBeforeLoan" onClick={(e) => { setContributionCategoryBeforeLoan("10,000") }} /> <span><b>#10,000</b></span>
                    </div>

                    <div className="col-xs-3">
                        <input type="radio" name="contributionCategoryBeforeLoan" onClick={(e) => { setContributionCategoryBeforeLoan("15,000") }} /> <span><b>#15,000</b></span>
                    </div>

                    <div className="col-xs-3">
                        <input type="radio" name="contributionCategoryBeforeLoan" onClick={(e) => { setContributionCategoryBeforeLoan("20,000") }} /> <span><b>#20,000</b></span>
                    </div>

                </div>


                <div className="row container mt-4">

                    <div className="col-sm-6">
                        <input type="text" value={totalAmountContributed} name="total" onChange={function (e) {
                            setTotalAmountContributed(e.target.value);
                        }} placeholder="Total Amount Contributed" className="form-control" />
                    </div>

                    <div className="col-sm-6">
                        <input type="text" value={amountInWords} name="amountInWords" onChange={function (e) {
                            setAmountInWords(e.target.value);
                        }} placeholder="Amount In Words" className="form-control" />
                    </div>
                </div>


                {/* CHECK BOX does religion support loan???? */}
                <div className="container row mt-4">


                    <div className="col-sm-6 ">
                        <h5>Do your Religion|Belief support Loan intrest ?</h5>
                    </div>

                    <div className="col-sm-3">
                        <input type="radio" name="isReligionSupportForLoan" onClick={(e) => { setIsReligionSupportForLoan("YES") }} /> <span>YES</span>
                    </div>

                    <div className="col-sm-3">
                        <input type="radio" name="isReligionSupportForLoan" onClick={(e) => { setIsReligionSupportForLoan("NO") }} /> <span>NO</span>
                    </div>

                </div>




                <div className="container row mt-4">


                    <div className="col-sm-2 ">
                        <h5>Eligibility</h5>
                    </div>

                    <div className="col-sm-4">
                        <input type="radio" name="isEligibilty" onClick={(e) => { setIsEligibilty("YES") }} /> <span>YES</span>
                    </div>

                    <div className="col-sm-4">
                        <input type="radio" name="isEligibilty" onClick={(e) => { setIsEligibilty("NO") }} /> <span>NO</span>
                    </div>

                </div>




                {/*  */}

                <div className="container row mt-4">

                    <div className="col-sm-6">
                        <input type="text" value={amountOfLoanOrLoanRequestFigure} name="amountOfLoanOrLoanRequestFigure" onChange={function (e) {
                            setAmountOfLoanOrLoanRequestFigure(e.target.value);
                        }} placeholder="Amount Of Loan | Loan Request Figure" className="form-control" />
                    </div>


                    <div className="col-sm-6">
                        <input type="text" value={amountInWordsOfRequestLoan} name="amountInWordsOfRequestLoan" onChange={function (e) {
                            setAmountInWordsOfRequestLoan(e.target.value);
                        }} placeholder="amount In Words Of Request Loan" className="form-control" />
                    </div>


                </div>








                {/*  */}

                <div className="container row mt-4">

                    <div className="col-sm-6 ">
                        <h5>Can you make Contribution While Servicing Loan ?</h5>
                    </div>

                    <div className="col-sm-3">
                        <input type="radio" name="isCanMakeContributionWhileServicingLoan" onClick={(e) => { setIsCanMakeContributionWhileServicingLoan("YES") }} /> <span>YES</span>
                    </div>

                    <div className="col-sm-3">
                        <input type="radio" name="isCanMakeContributionWhileServicingLoan" onClick={(e) => { setIsCanMakeContributionWhileServicingLoan("NO") }} /> <span>NO</span>
                    </div>


                </div>




                <div className="container row mt-4">
                    <div className="col-sm-6 ">
                        <h5>pick Amount Of Loan After Repayment ?</h5>
                    </div>

                    <div className="col-sm-3">
                        <input type="radio" name="pickAmountOfLoanAfterRepayment" onClick={(e) => { setPickAmountOfLoanAfterRepayment("YES") }} /> <span>YES</span>
                    </div>

                    <div className="col-sm-3">
                        <input type="radio" name="pickAmountOfLoanAfterRepayment" onClick={(e) => { setPickAmountOfLoanAfterRepayment("NO") }} /> <span>NO</span>
                    </div>
                </div>







                <div className="container row mt-4">

                    <div className="col-sm-3 mt-3">
                        <h5>Servicing Loan Amount</h5>
                    </div>
                    <div className="col-sm-6 ">
                        <input type="text" value={servicingLoanAmount} name="servicingLoanAmount" onChange={function (e) {
                            setServicingLoanAmount(e.target.value);
                        }} placeholder="Servicing Loan Amount" className="form-control" />
                    </div>

                </div>






                {/*  */}

                <div className="container row mt-4">

                    <div className="conatainer text-center mb-4 "><b> REFFERAL INFORMATION</b></div>
                    <div className="col-sm-3">
                        <input type="text" value={referralFullName} name="referralFullName" onChange={function (e) {
                            setReferralFullName(e.target.value);
                        }} placeholder="Referral FullName" className="form-control" />
                    </div>


                    <div className="col-sm-3">
                        <input type="text" value={referralPhone} name="phoneNumber" onChange={function (e) {
                            setReferralPhone(e.target.value);
                        }} placeholder="Phone Number" className="form-control" />
                    </div>


                    <div className="col-sm-3">
                        <input type="text" value={referralDateOfRegistration} name="referralDateOfRegistration" onChange={function (e) {
                            setReferralDateOfRegistration(e.target.value);
                        }} placeholder="Referral Date Of Registration" className="form-control" />
                    </div>
                </div>



                <div className="container row mt-4">

                    <div className="col-sm-3">
                        <input type="date" value={referralDateOfAdmin} name="total" onChange={function (e) {
                            setReferralDateOfAdmin(e.target.value);
                        }} placeholder="Total" className="form-control" />
                    </div>

                    <div className="col-sm-3">
                        <input type="text" value={referralUnitCode} name="referralUnitCode" onChange={function (e) {
                            setReferralUnitCode(e.target.value);
                        }} placeholder="referral Unit Code" className="form-control" />
                    </div>

                </div>




                <div className="row container mt-4">
                    <div className="col-6 ">
                        <button type="button" className="btn btn-danger"
                            onClick={(e) => {
                                e.preventDefault();
                                submit(e);
                            }}>EDIT</button>
                    </div>

                    <div className="col-6 ">
                        <button type="button" className="btn btn-warning"
                            onClick={(e) => {
                                e.preventDefault();
                                cancel(e);
                            }}>CANCEL</button>
                    </div>
                </div>

            </div>


        )

    }






    return (

        <div className="container">
            <Navbar></Navbar>
            <div className="text-center mt-4 mb-4">
                <b>EDIT PAGE.....</b>
            </div>

            {_data ? display() : <div>Loading ......</div>}
        </div>
    )
}

export default EditFinanceTable
