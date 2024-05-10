const express = require('express');
const router = express.Router();
const validation = require('../middleware/validate');
const storeController = require('../controllers/stores.js');

router.get('/', storeController.getAllStores);

router.get('/:id', storeController.getSingleStore);
router.post('/', storeController.createStore);
router.put('/:id',validation.store, storeController.updateStore);
router.delete('/:id', storeController.deleteStore);

module.exports = router;