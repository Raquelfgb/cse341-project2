const express = require('express');
const router = express.Router();
const validation = require('../middleware/validate.js');
const customerController = require('../controllers/customers.js');

router.get('/', customerController.getAllCustomer);

router.get('/:id', customerController.getSingleCustomer);
router.post('/', customerController.createCustomer);
router.put('/:id',validation.customer, customerController.updateCustomer);
router.delete('/:id', customerController.deleteCustomer);

module.exports = router;