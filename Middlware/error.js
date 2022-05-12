const ErrorHandler=require("../utils/ErrorHandle")
module.exports=(err,req,res,next)=>{
    err.statusCode=err.statusCode || 500
    err.message=err.message || "Server Xatologi"
    res.status(err.statusCode).json({
        success:false,
        error:err
    })
}