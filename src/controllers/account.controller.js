const AccountModel = require('../model/account');
class accountController {
    // [POST]: /account/register
    create(req, res, next) {
        AccountModel.create(req.body)
            .then(() => {
                res.status(200).json('Create a new account success');
            })
            .catch((error) => {
                res.status(500).json('Create new account fail');
            });
    }
    // [GET] /account/login
    show(req, res, next) {
        AccountModel.findOne({ name: req.body.name, password: req.body.password })
            .lean()
            .then((data) => {
                if (!!data) {
                    res.json(data);
                } else {
                    res.status(400).json('Login Fail');
                }
            })
            .catch(next);
    }
}

module.exports = new accountController();
