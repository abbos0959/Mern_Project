class ErrorHandler extends Error{
    constructor(message,statusCoder){
        super(message)
        this.statusCoder=statusCoder
        Error.captureStackTrace(this,this.constructor)
    }
}
module.exports=ErrorHandler