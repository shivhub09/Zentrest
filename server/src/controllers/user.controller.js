const asyncHandler = require("../utils/asyncHandler");
const apiError = require("../utils/apiError");
const apiResponse = require("../utils/apiResponse");
const User = require('../models/user.model');
const uploadOnCloudinary = require("../utils/cloudinary");

const registerUser = asyncHandler(async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user with same email exists
    const existedUser = await User.findOne({ email });
    if (existedUser) {
      throw new apiError(409, "User with this email already exists");
    }

    // Ensure a profile photo is provided and valid
    const profilePhotoPath = req.files?.profilePhoto?.[0]?.path;
    if (!profilePhotoPath) {
      throw new apiError(400, "Profile photo is required");
    }

    // Upload the profile photo to Cloudinary
    const profilePhotoFinal = await uploadOnCloudinary(profilePhotoPath);
    if (!profilePhotoFinal) {
      throw new apiError(400, "Failed to upload profile photo");
    }

    // Create a new user with provided information
    const user = await User.create({
      name,
      email,
      password,
      profilePhoto: profilePhotoFinal.url,
    });

    // Retrieve the user details without sensitive information
    const createdUser = await User.findById(user._id).select("-password -refreshToken");
    if (!createdUser) {
      throw new apiError(500, "Error retrieving registered user data");
    }

    // Return the successfully created user

    res.status(200).json(new apiResponse(201, createdUser, "User successfully registered"));

  } catch (error) {
    // Handle the caught error and respond with appropriate status and message
    const statusCode = error.statusCode || 500; // Default to internal server error
    const errorMessage = error.message || "An unexpected error occurred";

    // Return the error response with status code and error message
    res.status(statusCode).json(new apiResponse(statusCode, null, errorMessage));
  }
});

module.exports = registerUser;
