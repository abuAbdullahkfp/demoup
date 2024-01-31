import { CustomError } from "./abstract-error";

class NotFoundError extends CustomError {
  statusCode = 404;
  message = "Not Found";
  constructor() {
    super("Not Found");
    Object.setPrototypeOf(this, NotFoundError.prototype)
  }

  serializeErrors()  {
      return [
        {
            message: this.message,
            status : this.statusCode
        }
      ]
  }
}

export {NotFoundError}