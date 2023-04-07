const AccountModel = require('../model/account');
class userController {
    // [GET]: /user
    show(req, res, next) {
        const currentPage = parseInt(req.query.page);
        const pageSize = 5;
        AccountModel.find()
            .skip((currentPage - 1) * pageSize)
            .limit(pageSize)
            .lean()
            .then((data) => {
                res.json(data);
            })
            .catch(next);
    }
}

module.exports = new userController();
