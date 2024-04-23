
// this is an example of  higher order function coz it takes a function as its parameter 

// helps in the proper handling of errors and makes it very easy and readable and also obv making it easier to handler errors 

const asyncHandler = (fn)=> async (req, res , next) =>{
    try {
        return await fn(req, res, next);
    } catch (error) {
        return res.status(error.code || 500).json({
            success:false,
            message:error.message
        })
    }
}

module.exports = asyncHandler;