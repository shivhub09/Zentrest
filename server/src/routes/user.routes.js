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

router.route("/loginUser").post(
    userController.loginUser
)

router.route("/createPostbyUser").post(  upload.fields(
    [
        {
            name: "postFile",
            maxCount: 1
        }
    ]
),
    userController.createPost
)


router.route("/fetchAllPostCreatedByUser").post(
    userController.getAllPostCreatedByUser
)

router.route("/fetchLikedPostsByUser").post(
    userController.getAllLikedPost
)

module.exports = router;