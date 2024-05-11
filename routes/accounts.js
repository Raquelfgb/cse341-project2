const express = require('express');
const router = express.Router();
const validation = require('../middleware/validate');
const accountController = require('../controllers/accounts');

router.get('/', accountController.getAllAccount);

router.get('/:id', accountController.getSingleAccount);
router.post('/',validation.account, accountController.createAccount);
router.put('/:id',validation.account, accountController.updateAccount);
router.delete('/:id', accountController.deleteAccount);

module.exports = router;