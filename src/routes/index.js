const signUpRouter = require('./Router/signUp.router')
function routes(app) {
    app.use('/account', signUpRouter)
}

module.exports = { routes }
