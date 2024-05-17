const express = require('express');
const router = express.Router();
const validation = require('../middleware/validate.js');
const customerController = require('../controllers/customers.js');
const { isAuthenticated } = require('../middleware/authenticate');

router.get('/', customerController.getAllCustomer);
router.get('/:id', customerController.getSingleCustomer);
router.post('/', isAuthenticated, customerController.createCustomer);
router.put('/:id',isAuthenticated, validation.customer, customerController.updateCustomer);
router.delete('/:id', isAuthenticated, customerController.deleteCustomer);

module.exports = router;