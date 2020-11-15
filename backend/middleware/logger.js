const chalk = require("chalk")

const logger = async (req, res, next) => {
    console.log(chalk.blue(req.method, req.path));
    next();
};

module.exports = logger;