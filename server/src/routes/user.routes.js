const { Router } = require("express");
const registerUser = require("../controllers/user.controller");
const upload  = require("../middlewares/multer.middleware");

const router = Router();

router.route("/registerUser").post(
    upload.fields(
        [
            {
                name: "profilePhoto",
                maxCount: 1
            }
        ]
    ),
    registerUser);

module.exports = router;