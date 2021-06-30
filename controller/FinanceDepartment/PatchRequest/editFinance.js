

const FinanceModel = require('../../../model/Finance/financeModel');


const editFinance = async (req, res) => {


    try {
        const result = await FinanceModel.findById(req.params.id);

        // store in database......

        result.no = req.body.no;
        result.referralCode = req.body.referralCode;
        result.registrationNumber = req.body.registrationNumber;
        result.BVN = req.body.BVN;
        result.firstName = req.body.firstName;
        result.middleName = req.body.middleName;
        result.bankName = req.body.bankName;
        result.accountNumber = req.body.accountNumber;
        result.phone = req.body.phone;
        result.contributionCategoryBeforeLoan = req.body.contributionCategoryBeforeLoan;
        result.totalAmountContributed = req.body.totalAmountContributed;
        result.amountInWords = req.body.amountInWords;
        result.amountOfLoanOrLoanRequestFigure = req.body.amountOfLoanOrLoanRequestFigure;
        result.amountInWordsOfRequestLoan = req.body.amountInWordsOfRequestLoan;
        result.isReligionSupportForLoan = req.body.isReligionSupportForLoan;
        result.isEligibilty = req.body.isEligibilty;
        result.isCanMakeContributionWhileServicingLoan = req.body.isCanMakeContributionWhileServicingLoan;
        result.servicingLoanAmount = req.body.servicingLoanAmount;
        result.pickAmountOfLoanAfterRepayment = req.body.pickAmountOfLoanAfterRepayment;
        result.referralFullName = req.body.referralFullName;
        result.referralPhone = req.body.referralPhone;
        result.referralDateOfRegistration = req.body.referralDateOfRegistration;
        result.referralDateOfAdmin = req.body.referralDateOfAdmin;
        result.referralUnitCode = req.body.referralUnitCode;



        var Savedresult = await result.save();

        res.status(201).json(" successfully edited finance table");



    }
    catch (err) {
        res.status(500).json({
            errorMessage: err.message
        })
    }

}



module.exports = {
    editFinance
};
