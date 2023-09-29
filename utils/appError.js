class AppError extends Error {
  //THE CONSTRUCTOR METHOD IS CALLED EVERYTIME WE CREATE AN OBJECT OUT OF THIS CLASS.
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status = statusCode.toString().startsWith("4") ? "Fail" : "Error";
    this.isOperational = true;

    //EVERYTIME THERE IS AN ERROR, THERE IS A ERROR.STACK;
    //BUT WE DO NOT WANT TO APPEAR ON OUR CALL STACK IF NOT IT WOULD BE MESSY
    //HENCE WE USE THE BELOW CODE TO EXCLUDE IT
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
