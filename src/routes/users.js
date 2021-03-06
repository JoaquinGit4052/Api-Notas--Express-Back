const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');

router.post('/create', userController.create);
router.post('/login', userController.login);


module.exports = router;