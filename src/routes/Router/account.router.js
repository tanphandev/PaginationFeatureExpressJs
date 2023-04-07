const express = require('express');
const checkAccountExistsMiddleware = require('../../middlewares/checkAccountExists');
const accountController = require('../../controllers/account.controller');
const router = express.Router();

router.post('/register', checkAccountExistsMiddleware, accountController.create);
router.post('/login', accountController.show);

module.exports = router;
