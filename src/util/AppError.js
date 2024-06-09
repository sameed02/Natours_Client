export default class AppError extends Error {
  constructor(message, statusCode, status) {
    super(message); // Pass the message to the parent Error class
    this.statusCode = statusCode;
    this.status = status;
    Error.captureStackTrace(this, this.constructor); // Capture the stack trace
  }
}
