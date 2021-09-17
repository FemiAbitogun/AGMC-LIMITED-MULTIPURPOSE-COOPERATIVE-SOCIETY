
const router = require('express').Router();
const { upload } = require('../../../fileHelper');
const { auth } = require('../../../middleWare/authMiddleWare')
const { referee1ImageSuscriberAccount, referee2ImageSuscriberAccount, getAllSuscriberAccount, createSuscriberAccount, deleteSuscriberAccount,
    getSuscriberAccountById, refImageIMiddleware, refImageIIMiddleware


} = require('../../../controller/MarketingDepartment/monthlyContribution');

router.get('/', auth, getAllSuscriberAccount);
router.get('/:id', auth, getSuscriberAccountById);


//router.post('/', createSuscriberAccount); ERROR YOU HAVE THIS ROUTE CONSUMING BAD!!
router.post('/referee1', auth, upload.single("referee1Image"), referee1ImageSuscriberAccount);
router.post('/referee2', auth, upload.single("referee2Image"), referee2ImageSuscriberAccount);

router.post('/', auth, upload.single("customerImage"), refImageIMiddleware, refImageIIMiddleware,
    createSuscriberAccount);


router.delete('/delete/:id', auth, deleteSuscriberAccount);

module.exports = router;



