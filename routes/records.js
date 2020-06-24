const express = require('express');
const controllers = require('../controllers/records');

const router = express.Router();

router.post('/getStamp', controllers.getStamp);
router.post('/updateStamp', controllers.updateStamp);

module.exports = router;
