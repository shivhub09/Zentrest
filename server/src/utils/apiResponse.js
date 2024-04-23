// this is the response part of the backend which helps in the uniformity of the code for the frontend part of the code 


class ApiResponse{
    constructor(
        statuscode , data , message="Succcess"
    ) {
        this.statuscode = statuscode
        this.data = data 
        this.message = message 
        this.success = statuscode<400
    }
    
}

module.exports = ApiResponse