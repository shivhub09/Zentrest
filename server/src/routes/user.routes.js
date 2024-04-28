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


router.route("/createPost").post(  upload.fields(
    [
        {
            name: "postFile",
            maxCount: 1
        }
    ]
),
    userController.createPost
)


module.exports = router;