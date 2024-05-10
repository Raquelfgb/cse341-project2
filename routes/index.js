const router = require('express').Router();

//router.get('/' , (req, res) => { res.send('Hello World');});

router.use('/clients', require('./clients'));
router.use('/stores', require('./stores'));

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = router;