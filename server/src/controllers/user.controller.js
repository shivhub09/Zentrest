const asyncHandler = require("../utils/asyncHandler");
const apiError = require("../utils/apiError");
const apiResponse = require("../utils/apiResponse");
const User = require('../models/user.model');


const getUser = asyncHandler(async (req, res)=>{

    return res.status(201).json(new apiResponse(200, "User successfully registered"))

});


module.exports = getUser 