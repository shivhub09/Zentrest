const { Router } = require("express");
const userController = require("../controllers/user.controller");
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
    userController.registerUser);

router.route("/likePost").post(
    userController.likePost
)


module.exports = router;