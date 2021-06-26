
const router = require('express').Router();

const { getAdmissionIntoUnitById, getAllAdmissionIntoUnit, createAdmissionIntoUnit, deleteAdmissionIntoUnit } = require('../../controller/MarketingDepartment/admissionIntoUnit');
router.get('/', getAllAdmissionIntoUnit);
router.get('/:id', getAdmissionIntoUnitById);

router.post('/', createAdmissionIntoUnit);
router.delete('/delete/:id', deleteAdmissionIntoUnit);

module.exports = router;




