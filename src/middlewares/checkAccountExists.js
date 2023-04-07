const AccountModel = require('../model/account');
function checkAccountExists(req, res, next) {
    AccountModel.findOne({ name: req.body.name })
        .lean()
        .then((data) => {
            if (!!data) {
                res.json('Account is existed');
            } else {
                next();
            }
        })
        .catch((error) => {
            console.log('error:', error);
        });
}
module.exports = checkAccountExists;
