module.exports = app => {

  const baseRouter = require("./base.routes");
  app.use("/", baseRouter);

  const authRouter = require('./auth.routes')
  app.use('/', authRouter)

}
