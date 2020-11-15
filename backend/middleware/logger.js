const chalk = require("chalk");

// * this function is logging which routes is visited
const logger = async (req, res, next) => {
  console.log(chalk.blue(req.method, req.path));
  next();
};

module.exports = logger;
