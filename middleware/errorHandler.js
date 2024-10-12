const {constant} = require("../constant");

const { stack } = require("../routs/contactRoutes");

const errorHandler = (err,req,res,next)=>{
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constant.Not_Found:
            res.json({title: "Not Found", message: err.message, stackTrace: err.stack});
            break;
        case constant.Validation_Error:
            res.json({title: "Validation Faild", message: err.message, stackTrace: err.stack});
            break;
        case constant.FORBIDDEN:
            res.json({title: "FORBIDDEN", message: err.message, stackTrace: err.stack});
            break;
        case constant.UNAUTHORIZED:
            res.json({title: "UNAUTHORIZED", message: err.message, stackTrace: err.stack});
            break;
        case constant.Server_Error:
            res.json({title: "Server_Error", message: err.message, stackTrace: err.stack});
            break;
        default:
            console.log("No Error, All Good");
            break;
    }
};

module.exports = errorHandler;