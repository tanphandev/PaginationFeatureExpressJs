const AccountModel = require('../model/account');
class registerController {
    // [POST]: /register
    create(req, res, next) {
        AccountModel.create(req.body)
            .then(() => {
                res.status(200).json('Create a new account success');
            })
            .catch((error) => {
                res.status(500).json('Create new account fail');
            });
    }
}

module.exports = new registerController();
