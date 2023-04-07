const accountRouter = require('./Router/account.router');
function routes(app) {
    app.use('/account', accountRouter);
}

module.exports = { routes };
