const AccountModel = require('../model/account');
class loginController {
    // [POST] /login
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

module.exports = new loginController();
