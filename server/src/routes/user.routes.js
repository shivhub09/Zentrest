const { Router } = require("express");
const getUser = require("../controllers/user.controller");

const router = Router();

router.route("/getUser").get(getUser);

module.exports = router;