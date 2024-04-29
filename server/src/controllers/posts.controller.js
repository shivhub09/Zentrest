const asyncHandler = require("../utils/asyncHandler");
const apiError = require("../utils/apiError");
const apiResponse = require("../utils/apiResponse");
const Post = require('../models/post.model');

const fetchAllPosts = asyncHandler( async (req, res)=>{
    try {
        const allPosts = await Post.find({})

        return res.status(200).json(new apiResponse(200 , allPosts , "All Posts Fetched"));
    } catch (error) {
        const statusCode = error.statusCode || 500; // Default to internal server error
        const errorMessage = error.message || "An unexpected error occurred";
    
        res.status(statusCode).json(new apiResponse(statusCode, null, errorMessage));
    }
})

module.exports = { fetchAllPosts }