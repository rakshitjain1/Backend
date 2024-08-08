class ApiResponse {
    constructor(statusCode , data , message = "Succes"){
        this.statuscode = statusCode
        this.data = data 
        this.message = message
        this.success = statusCode < 400
    }
}