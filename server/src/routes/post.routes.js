const { Router } = require("express");
const postController = require("../controllers/posts.controller");
const upload  = require("../middlewares/multer.middleware");
const router = Router();


router.route("/fetchAllPosts").get(
    postController.fetchAllPosts
)

module.exports = router;