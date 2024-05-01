const asyncHandler = require("../utils/asyncHandler");
const apiError = require("../utils/apiError");
const apiResponse = require("../utils/apiResponse");
const User = require('../models/user.model');
const uploadOnCloudinary = require("../utils/cloudinary");
const LikedPosts = require('../models/liked.model');
const Post = require('../models/post.model');


// register a new user in the backend 
const registerUser = asyncHandler(async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existedUser = await User.findOne({ email });
    if (existedUser) {
      console.log("user without emai");
      throw new apiError(409, "User with this email already exists");
    }

    const profilePhotoPath = req.files?.profilePhoto?.[0]?.path;
    if (!profilePhotoPath) {
      throw new apiError(400, "Profile photo is required");
    }

    const profilePhotoFinal = await uploadOnCloudinary(profilePhotoPath);
    if (!profilePhotoFinal) {
      throw new apiError(400, "Failed to upload profile photo");
    }

    const user = await User.create({
      name,
      email,
      password,
      profilePhoto: profilePhotoFinal.url,
    });

    const createdUser = await User.findById(user._id).select("-password -refreshToken");
    if (!createdUser) {
      throw new apiError(500, "Error retrieving registered user data");
    }


    res.status(200).json(new apiResponse(201, createdUser, "User successfully registered"));

  } catch (error) {
    const statusCode = error.statusCode || 500; // Default to internal server error
    const errorMessage = error.message || "An unexpected error occurred";

    res.status(statusCode).json(new apiResponse(statusCode, null, errorMessage));
  }
});


// login functionality for the user
const loginUser = asyncHandler(async (req, res) => {
  try {
    const { userEmail, password } = req.body;

    if (!userEmail || !password) {
      throw new apiError(401, "Invalid user email or password. Password and Email are required");
    }

    const user = await User.findOne({ email: userEmail });

    if (!user) {
      throw new apiError(401, "User does not exist. Create new account");
    }

    const isPasswordValid = await user.isPasswordCorrect(password)

    if (!isPasswordValid) {
      throw new apiError(401, "Invalid user credentials")
    }

    return res.status(200).json(new apiResponse(200, user, "User successfully loggedIn"))
  } catch (error) {
    const statusCode = error.statusCode || 500; // Default to internal server error
    const errorMessage = error.message || "An unexpected error occurred";

    res.status(statusCode).json(new apiResponse(statusCode, null, errorMessage));
  }

})


// like a post
const likePost = async (req, res) => {
  try {
    const { imageUrl, userEmail } = req.body;

    if (!imageUrl || !userEmail) {
      throw new Error("Both 'imageUrl' and 'userEmail' are required.");
    }

    const user = await User.findOne({ email: userEmail });

    if (!user) {
      res.status(404).json({ message: `No user found with email: ${userEmail}` });
      return;
    }

    const existingLiked = await LikedPosts.findOne({
      imageUrl,
      likedBy: user._id,
    });

    if (existingLiked) {
      res.status(400).json({ message: "You have already liked this post." });
      return;
    }

    const newLiked = new LikedPosts({
      imageUrl,
      likedBy: user._id,
    });

    await newLiked.save();

    res.status(201).json({ message: "Post liked successfully.", like: newLiked });
  } catch (error) {
    console.error("Error in likePost:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};


const createPost = asyncHandler(async (req, res) => {
  try {
    const { description, isGenerated, userEmail } = req.body;
    const postFilePath = req.files?.postFile?.[0]?.path
    const user = await User.findOne({ email: userEmail });

    if (!user) {
      throw new apiError(500, "couldnot find the user");
    }

    if (!postFilePath) {
      throw new apiError(400, "post file not added");
    }

    const postFile = await uploadOnCloudinary(postFilePath);
    if (!postFilePath) {
      throw new apiError(400, "Failed to upload profile photo");
    }


    const post = Post.create({
      postFile: postFile.url,
      description: description,
      isGenerated: isGenerated,
      owner: user._id
    });

    console.log(post);


    const createdPost = Post({
      postFile: postFile.url,
      description: description,
      isGenerated: isGenerated,
      owner: user._id
    });

    res.status(201).json(new apiResponse(201, createdPost, "Post Successfully Created"));
  } catch (error) {
    const statusCode = error.statusCode || 500; // Default to internal server error
    const errorMessage = error.message || "An unexpected error occurred";

    res.status(statusCode).json(new apiResponse(statusCode, null, errorMessage));
  }
})


// get all created Posts
const getAllPostCreatedByUser = asyncHandler(async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      throw new apiError(400, "Invalid email or no email entered");
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      throw new apiError(400, "No user found , Email may be incorrect");
    }

    const posts = await Post.find({ owner: user._id });

    res.status(201).json(new apiResponse(201, posts, "Posts fetched successfully"));


  } catch (error) {
    const statusCode = error.statusCode || 500; // Default to internal server error
    const errorMessage = error.message || "An unexpected error occurred";

    res.status(statusCode).json(new apiResponse(statusCode, null, errorMessage));
  }
}
);


// fetch all liked posts
const getAllLikedPost = asyncHandler(async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      throw new apiError(400, "Invalid email or no email entered");
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      throw new apiError(400, "No user found , Email may be incorrect");
    }

    const posts = await LikedPosts.find({ likedBy: user._id });

    res.status(201).json(new apiResponse(201, posts, "All liked posts fetched successfully"));


  } catch (error) {
    const statusCode = error.statusCode || 500; // Default to internal server error
    const errorMessage = error.message || "An unexpected error occurred";

    res.status(statusCode).json(new apiResponse(statusCode, null, errorMessage));
  }
}
);

const deleteUserPost = asyncHandler(async (req, res) => {
  try {
    const { userEmail, postUrl } = req.body;

    if (!userEmail || !postUrl) {
      return res.status(400).json(new apiError(400, "Email and post URL are required"));
    }

    const user = await User.findOne({ email: userEmail });

    if (!user) {
      return res.status(404).json(new apiError(404, "User not found"));
    }

    const deleteResult = await Post.deleteOne({ postFile: postUrl, owner: user._id });

    if (deleteResult.deletedCount === 0) {
      return res.status(404).json(new apiError(404, "Post not found or doesn't belong to this user"));
    }

    res.status(200).json(new apiResponse(200, deleteResult, "Successfully deleted post"));
  } catch (error) {
    console.error("Error deleting post:", error);
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "An unexpected error occurred";

    res.status(statusCode).json(new apiResponse(statusCode, null, errorMessage));
  }
});


// const unlike post liked by user 

const unlikePostByUser = asyncHandler(async (req, res)=>{
  try {
    const {userEmail , postUrl} = req.body;

    if(!userEmail || !postUrl){
      return res.status(400).json(new apiError(400, "Email and post URL are required"));
    }

    const user = await User.findOne({email:userEmail});

    if(!user){
      return res.status(404).json(new apiError(404, "User not found"));
    }

    const unlikedPost = await LikedPosts.deleteOne({imageUrl: postUrl , likedBy: user._id});

    if (unlikedPost.deletedCount === 0) {
      return res.status(404).json(new apiError(404, "Post not found or doesn't belong to this user"));
    }

    res.status(200).json(new apiResponse(200, deleteResult, "Successfully unliked post"));


  } catch (error) {
    console.error("Error unliking post:", error);
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "An unexpected error occurred";

    res.status(statusCode).json(new apiResponse(statusCode, null, errorMessage));
  }



})



module.exports = { registerUser, loginUser, likePost, createPost, getAllPostCreatedByUser, getAllLikedPost , deleteUserPost , unlikePostByUser};
