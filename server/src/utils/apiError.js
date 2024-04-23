//  this is again used for the betterment of the user to understand the error 

// this helps in the uniformity of the error and the response which is received from the server which helps in the frontend part of the code


class ApiError extends Error {
    constructor(
        statuscode , 
        message= "Something went wrong",
        error = [],
        stack = ""
    ){
        super(message)
        this.statuscode =  statuscode
        this.data = null,
        this.message = message 
        this.success = false  
        this.error = error

        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this.statuscode , this.constructor)
        }

    }
}

module.exports = ApiError