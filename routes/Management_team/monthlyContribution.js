


const router = require('express').Router();
const upload = require('../../fileHelper');

const { getAllSuscriberAccount, createSuscriberAccount, deleteSuscriberAccount } = require('../../controller/MarketingDepartment/MonthlyContribution');

router.get('/',getAllSuscriberAccount);
router.post('/',upload.single("customerImage"),createSuscriberAccount);
router.delete('/delete/:id',deleteSuscriberAccount);

module.exports = router;




