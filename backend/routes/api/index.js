const router = require("express").Router();
router.use(require("./login"));
router.use(require("./register"));
router.use(require("./user"));

// TODO: router virker nu, men er ikke sikker på det er en optimal løsning

module.exports = router;