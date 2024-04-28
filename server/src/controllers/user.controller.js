const asyncHandler = require("../utils/asyncHandler");
const apiError = require("../utils/apiError");
const apiResponse = require("../utils/apiResponse");
const User = require('../models/user.model');
const uploadOnCloudinary = require("../utils/cloudinary");
const LikedPosts = require('../models/liked.model');

const registerUser = asyncHandler(async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existedUser = await User.findOne({ email });
    if (existedUser) {
      console.log("user without emai");
      // throw new apiError(409, "User with this email already exists");
    }

    const profilePhotoPath = req.files?.profilePhoto?.[0]?.path;
    if (!profilePhotoPath) {
      // throw new apiError(400, "Profile photo is required");
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


const likePost = asyncHandler(async (req, res) => {
  try {
    console.log(req.body);

    const { imageUrl, userEmail } = req.body;

    if (!imageUrl || !userEmail) {
      throw new apiError(400, "Both 'imageUrl' and 'userEmail' are required.");
    }

    // Find the user by email to get the User ID
    const user = await User.findOne({ email: userEmail });

    if (!user) {
      throw new apiError(404, `No user found with email: ${userEmail}`);
    }

    const existingLiked = await LikedPosts.findOne({
      imageUrl: imageUrl,
      likedBy: user._id,
    });

    if (existingLiked) {
      throw new apiError(400, "You have already liked this post.");
    }

    console.log("No like record found.");

    const newLiked = new LikedPosts({
      imageUrl,
      likedBy: user._id,
    });

    console.log("Saving new like:", newLiked);

    await newLiked.save();

    console.log("Post liked and saved.");

    res.status(201).json(
      new apiResponse(201, newLiked, "Post liked successfully.")
    );

  } catch (error) {
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "An unexpected error occurred.";
    res.status(statusCode).json(new apiResponse(statusCode, null, errorMessage));
  }
});


module.exports = { registerUser, likePost };
