
const router= require('express').Router();

const {confirm,getAllUserAccount,createUserAccount,deleteUserAccount,loginUserAccount } = require('../../controller/Account/authenticateUser');

router.get('/', getAllUserAccount);
router.post('/confirm',confirm);

router.post('/create',createUserAccount);
router.post('/login',loginUserAccount);

router.delete('/delete/:id',deleteUserAccount);


module.exports= router;





