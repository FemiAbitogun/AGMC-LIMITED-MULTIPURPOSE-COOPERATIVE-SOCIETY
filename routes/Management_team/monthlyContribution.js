


const router = require('express').Router();
const {upload} = require('../../fileHelper');

const {getPhoto,getAllSuscriberAccount, createSuscriberAccount, deleteSuscriberAccount } = require('../../controller/MarketingDepartment/MonthlyContribution');

router.get('/', getAllSuscriberAccount);
router.get('/photo/:id',getPhoto);


//router.post('/', createSuscriberAccount); ERROR YOU HAVE THIS ROUTE CONSUMING BAD!!
router.post('/',upload.single("customerImage"), createSuscriberAccount);

router.delete('/delete/:id', deleteSuscriberAccount);

module.exports = router;




