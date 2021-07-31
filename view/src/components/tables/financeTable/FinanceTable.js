
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar'


function FinanceTable() {

    const [userData, setUserData] = useState([]);
    const [isMounted, setisMounted] = useState(true);


    useEffect(() => {
        getFinanceData();

        return () => {
            setisMounted(false);
        }
    }, [userData]);


    const getFinanceData = async () => {
        if (isMounted) {
            var { data } = await axios.get("http://localhost:9000/api/finance")
            setUserData(data)
        }
        if (!isMounted) {
            return
        }
    }


    function deleteMethod(id) {
        axios.delete(`http://localhost:9000/api/finance/delete/${id}`);
        setisMounted(true);
        getFinanceData();

    }











    function renderUsers() {

        return userData.map((user) => {

            return (
                <div key={user._id} className="container table mt-4">

                    <div className="conatiner row mb-4 mt-4">
                        <div className="col-sm-2">
                            <b>Form No</b>
                        </div>
                        <div className="col-sm-4 ">
                            <b>{user.no}</b>
                        </div>

                    </div>


                    <table className="table conatainer" >
                        <tbody>
                            <tr>
                                <th scope="row">Refferal Code</th>
                                <td>{user.referralCode}</td>

                                <th scope="row">Registration Number</th>
                                <td>{user.registrationNumber}</td>

                                <th scope="row">BVN</th>
                                <td>{user.BVN}</td>
                            </tr>



                            <tr>
                                <th scope="row">First Name</th>
                                <td>{user.firstName}</td>

                                <th scope="row">Middle Name</th>
                                <td>{user.middleName}</td>

                                <th scope="row">Last Name</th>
                                <td>{user.lastName}</td>



                            </tr>



                            <tr>
                                <th scope="row">Bank Name</th>
                                <td>{user.bankName}</td>

                                <th scope="row">Account Number</th>
                                <td>{user.accountNumber}</td>
                                <th scope="row">Phone</th>
                                <td>{user.phone}</td>

                            </tr>



                            {/*  */}


                            <tr>

                                <th scope="row">Contribution Category BeforeLoan </th>
                                <td>{user.contributionCategoryBeforeLoan}</td>

                                <th scope="row">Total Amount Contributed</th>
                                <td>{user.totalAmountContributed}</td>

                                <th scope="row">Amount In Words</th>
                                <td>{user.amountInWords}</td>

                            </tr>


                            {/*  */}




                            <tr>
                                <th scope="row">Amount Of Loan|Loan Request Figure</th>
                                <td>{user.amountOfLoanOrLoanRequestFigure}</td>

                                <th scope="row">Religion Support For Loan </th>
                                <td>{user.isReligionSupportForLoan}</td>

                                <th scope="row">Eligibilty Due to Religion|Belief</th>
                                <td>{user.isEligibilty}</td>

                                <th scope="row">Contribution While Servicing Loan</th>
                                <td>{user.isCanMakeContributionWhileServicingLoan}</td>

                            </tr>

                            {/*  */}

                            <tr>
                                <th scope="row">Servicing Loan Amount</th>
                                <td>{user.servicingLoanAmount}</td>

                                <th scope="row">pick Amount Of Loan After Repayment ? </th>
                                <td>{user.pickAmountOfLoanAfterRepayment}</td>

                            </tr>

                        </tbody>
                    </table>


                    <div className="text-center  bg-danger"><b>REFFERAL</b> </div>

                    <table className="table conatainer">
                        <tbody>

                            <tr>
                                <th scope="row">Full Name</th>
                                <td>{user.referralFullName}</td>

                                <th scope="row">Phone Number </th>
                                <td>{user.referralPhone}</td>

                            </tr>



                            <tr>
                                <th scope="row">Date Of Registration</th>
                                <td>{user.referralDateOfRegistration}</td>

                                <th scope="row">Date Of Admin</th>
                                <td>{user.referralDateOfAdmin}</td>

                                <th scope="row">Referral Unit Code</th>
                                <td>{user.referralUnitCode}</td>
                            </tr>

                        </tbody>
                    </table>





                    <b> Loan Bond.....</b>

                    <table className="table conatainer">

                        <tbody>


                            <tr>
                                <th scope="row">Member Name</th>
                                <td>{user.memberName}</td>

                                <th scope="row">Registration Number</th>
                                <td>{user.memberRegistrationNumber}</td>

                                <th scope="row">Date</th>
                                <td>{user.date}</td>
                            </tr>




                            <tr>
                                <th scope="row">Name</th>
                                <td>{user.surety1MemberName}</td>

                                <th scope="row">Registration Number</th>
                                <td>{user.surety1MemberRegistrationNumber}</td>

                                <th scope="row">Date</th>
                                <td>{user.surety1DateOfRegistration}</td>
                            </tr>




                            <tr>
                                <th scope="row">Refferal Name</th>
                                <td>{user.surety1NameOfRefferal}</td>

                                <th scope="row">Total Contribution</th>
                                <td>{user.surety1TotalContribution}</td>


                            </tr>


                            <tr>

                                <th scope="row">BVN</th>
                                <td>{user.surety2BVN}</td>
                            </tr>
                        </tbody>

                    </table>



                    <b>Surety 2</b>

                    <table className="table conatainer">

                        <tbody>

                            <tr>
                                <th scope="row">BVN</th>
                                <td>{user.surety2BVN}</td>
                            </tr>


                            <tr>
                                <th scope="row">First Name</th>
                                <td>{user.surety2FirstName}</td>

                                <th scope="row">Middle Name</th>
                                <td>{user.surety2MiddleName}</td>

                                <th scope="row"> Last Name</th>
                                <td>{user.surety2LastName}</td>
                            </tr>

                            <tr>
                                <th scope="row">Account Number</th>
                                <td>{user.surety2AccountNumber}</td>

                                <th scope="row">Occupation</th>
                                <td>{user.surety2Occupation}</td>


                            </tr>



                            <tr>

                                <th scope="row"> Place Of Work Address</th>
                                <td>{user.surety2PlaceOfWorkAddress}</td>

                                <th scope="row">Position</th>
                                <td>{user.surety2Position}</td>

                                <th scope="row">Level</th>
                                <td>{user.surety2Level}</td>

                            </tr>



                            <tr>
                                <th scope="row"> Relationship With Borrower</th>
                                <td>{user.surety2RelationShipWithBorrower}</td>

                                <th scope="row">Years of Relationship With Borrower</th>
                                <td>{user.surety2YearsWithBorrower}</td>


                            </tr>

                        </tbody>
                    </table>

                    <input type="submit" value="delete" className="btn btn-success"
                        onClick={() => { deleteMethod(user._id) }}
                    />

                    <span>
                        <button className="btn btn-warning m-3"><Link to={`/editFinance/edit/${user._id}`}>EDIT unit</Link> </button>
                    </span>

                    <br className="mt-4"></br>

                </div>)
        })

    }







    return (
        <div>

            <div>
                <Navbar />

                {userData && renderUsers()}
            </div>



        </div>
    )
}

export default FinanceTable
