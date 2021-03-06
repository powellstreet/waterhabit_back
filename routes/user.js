const express = require('express');
const controllers = require('../controllers/user');

const router = express.Router();

router.post('/signIn', controllers.signIn);
router.post('/signUp', controllers.signUp);
router.post('/profileUpdate', controllers.profileUpdate);

module.exports = router;
