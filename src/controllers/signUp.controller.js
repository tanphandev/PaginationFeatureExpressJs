class signUpController {
    create(req, res, next) {
        console.log(req.body)
        res.end()
    }
}

module.exports = new signUpController()
