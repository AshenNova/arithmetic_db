// if you use 4 parameters, express will automatically know it is a error handling middleware
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
      res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
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
