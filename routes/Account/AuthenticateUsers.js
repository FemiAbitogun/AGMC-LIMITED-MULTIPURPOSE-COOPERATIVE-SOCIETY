
const router= require('express').Router();

const { getAllUserAccount,createUserAccount,deleteUserAccount } = require('../../controller/Account/authenticateUser');

router.get('/', getAllUserAccount);
router.post('/',createUserAccount);
router.delete('/delete/:id',deleteUserAccount);


module.exports= router;





