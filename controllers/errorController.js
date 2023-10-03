// if you use 4 parameters, express will automatically know it is a error handling middleware
const AppError = require("../utils/appError");

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};

const handleDuplicateFieldDB = (err) => {
  const value = err.errmsg.match(/(["'])(?:(?=(\\?))\2.)*?\1/)[0];
  console.log(value);
  const message = `Duplicate field value: ${value}. Please use another value.`;
  return new AppError(message, 400);
};

module.exports = (err, req, res, next) => {
  console.log("ERROR detected");
  err.statusCode = err.statusCode || 500; // INTERNAL ERROR
  err.status = err.status || "Error";

  if (process.env.NODE_ENV == "DEVELOPMENT") {
    res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  } else {
    // OPERATIONAL ERROR
    if (err.isOperational) {
      //DESTRUCTOR THE OBJECT
      let error = { ...err, name: err.name };
      if (err.name == "CastError") {
        console.log(error);
        error = handleCastErrorDB(err);
      }
      if (err.code == "11000") {
        console.log(error);
        error = handleDuplicateFieldDB(err);
      }
      res.status(error.statusCode).json({
        status: error.status,
        message: error.message,
      });

      //   PROGRAMMING ERROR`
    } else {
      // 1) LOG THE ERROR
      console.error(`ERROR 🔥`, err);
      // 2) SEND THE ERROR
      res.status(500).json({
        status: "Error",
        message: "Something went wrong",
      });
    }
  }
};
