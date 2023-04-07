const express = require('express');
const checkAccountExistsMiddleware = require('../../middlewares/checkAccountExists');
const registerController = require('../../controllers/register.controller');
const router = express.Router();

router.post('/', checkAccountExistsMiddleware, registerController.create);

module.exports = router;
