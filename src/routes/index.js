const registerRouter = require('./Router/register.router');
const loginRouter = require('./Router/login.router');
const userRouter = require('./Router/user.router');
function routes(app) {
    app.use('/register', registerRouter);
    app.use('/login', loginRouter);
    app.use('/user', userRouter);
}

module.exports = { routes };
