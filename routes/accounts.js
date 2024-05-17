const express = require('express');
const router = express.Router();
const validation = require('../middleware/validate');
const accountController = require('../controllers/accounts');
const { isAuthenticated } = require('../middleware/authenticate');

router.get('/', accountController.getAllAccount);
router.get('/:id', accountController.getSingleAccount);
router.post('/',isAuthenticated, validation.account, accountController.createAccount);
router.put('/:id',isAuthenticated, validation.account, accountController.updateAccount);
router.delete('/:id',isAuthenticated, accountController.deleteAccount);

module.exports = router;