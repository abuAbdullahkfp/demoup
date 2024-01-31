import { CustomError } from "./abstract-error";

class DatabaseConnectionError extends CustomError {
  message = "Error connecting to the database";
  statusCode: number = 500;
  constructor() {
    super("Error connecting to DB");
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
  serializeErrors() {
    return[
        {
            message: this.message,
            status: this.statusCode
        }
    ]
  }
}

export {DatabaseConnectionError}
