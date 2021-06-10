
const router = require('express').Router();

const {  getAllAdmissionIntoUnit, createAdmissionIntoUnit, deleteAdmissionIntoUnit } = require('../../controller/MarketingDepartment/admissionIntoUnit');
router.get('/',getAllAdmissionIntoUnit);
router.post('/',createAdmissionIntoUnit);
router.delete('/delete/:id',deleteAdmissionIntoUnit);

module.exports = router;




