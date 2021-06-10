


const router = require('express').Router();


const { getAllDailyContributor, createDailyContributor ,deleteDailyContributor } = require('../../controller/MarketingDepartment/dailyContributionRegistration');

router.get('/getAll',getAllDailyContributor);
router.post('/',createDailyContributor);
router.delete('/delete/:id',deleteDailyContributor);

module.exports = router;




