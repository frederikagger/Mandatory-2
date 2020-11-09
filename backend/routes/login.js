const router = require("express").Router();

router.post("/login", (req, res) => {
    
    res.send("GET request to the homepage");
});

module.exports = router;
