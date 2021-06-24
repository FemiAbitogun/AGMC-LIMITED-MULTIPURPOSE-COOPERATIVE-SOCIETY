const router = require('express').Router();
const { upload } = require('../../../fileHelper');


const {
    editRef1Image,
    editRef2Image,
    editCustomerImage,
    editMonthlySuscriber,
} = require('../../../controller/MarketingDepartment/PatchRequest/monthlyPatch');




//router.post('/', createSuscriberAccount); ERROR YOU HAVE THIS ROUTE CONSUMING BAD!!
const url = "http://localhost:9000/api/monthlyContribution/edit/monthly/"



router.patch('/monthly/:id', editMonthlySuscriber)
router.patch('/monthly/referee1/:id', upload.single("referee1Image"), editRef1Image);
router.patch('/monthly/referee2/:id', upload.single("referee2Image"), editRef2Image);
router.patch('/monthly/customerImage/:id', upload.single("customerImage"), editCustomerImage);



module.exports = router;

