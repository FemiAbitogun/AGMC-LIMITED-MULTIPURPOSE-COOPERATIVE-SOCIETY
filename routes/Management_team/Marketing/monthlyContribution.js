


const router = require('express').Router();
const {upload} = require('../../../fileHelper');

const {referee1ImageSuscriberAccount,referee2ImageSuscriberAccount,getAllSuscriberAccount, createSuscriberAccount, deleteSuscriberAccount ,
    getSuscriberAccountById

} = require('../../../controller/MarketingDepartment/monthlyContribution');

router.get('/', getAllSuscriberAccount);
router.get('/:id', getSuscriberAccountById);


//router.post('/', createSuscriberAccount); ERROR YOU HAVE THIS ROUTE CONSUMING BAD!!
router.post('/referee1',upload.single("referee1Image"), referee1ImageSuscriberAccount);
router.post('/referee2',upload.single("referee2Image"), referee2ImageSuscriberAccount);

router.post('/',upload.single("customerImage"), createSuscriberAccount);


router.delete('/delete/:id', deleteSuscriberAccount);

module.exports = router;




