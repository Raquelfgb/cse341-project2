const express = require('express');
const router = express.Router();
const validation = require('../middleware/validate');
const employeeController = require('../controllers/employee');

router.get('/', clientController.getAllEmployees);

router.get('/:id', clientController.getSingleClient);
router.post('/',validation.client, clientController.createClient);
router.put('/:id',validation.client, clientController.updateClient);
router.delete('/:id', clientController.deleteClient);

module.exports = router;