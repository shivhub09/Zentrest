const asyncHandler = require("../utils/asyncHandler");
const apiError = require("../utils/apiError");
const apiResponse = require("../utils/apiResponse");
const User = require('../models/user.model');
const uploadOnCloudinary = require("../utils/cloudinary");

const registerUser = asyncHandler(async (req, res)=>{
    const {name , email , password } = req.body;

    var existedUser = await User.findOne({
        $or: [{ email }]
    });

    if (existedUser) {
        throw new apiError(409, "User with email or username already exists");
    }
    // console.log("user not present");

    
    const profilePhoto = req.files?.profilePhoto[0]?.path;
    // console.log(profilePhoto);
    if (!profilePhoto) {
        throw new apiError(400, "Error uploading avatar or cover image");
    }

    const profilePhotoFinal = await uploadOnCloudinary(profilePhoto);

    if (!profilePhotoFinal) {
        throw new apiError(400, "Error uploading avatar or cover image");
    }

    const user = await User.create({
        name,
        email,
        profilePhoto : profilePhotoFinal.url,
        password 
    })

    const createdUser = await User.findById(user._id).select("-password -refreshToken");

    if (!createdUser) {
        throw new apiError(500, "Something went wrong while registering the user");
    }

    return res.status(201).json(new apiResponse(200, createdUser, "User successfully registered"));

});


module.exports = registerUser 