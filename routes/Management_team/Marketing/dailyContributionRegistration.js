


const router = require('express').Router();


const {dailyContributorById, getAllDailyContributor, createDailyContributor ,deleteDailyContributor } = require('../../../controller/MarketingDepartment/dailyContributionRegistration');

router.get('/getAll',getAllDailyContributor);

//http://localhost:3000/editDaily/edit/60d7b573c7c5841a204beed7
router.get('/:id',dailyContributorById);




router.post('/',createDailyContributor);
router.delete('/delete/:id',deleteDailyContributor);

module.exports = router;





