import { Request, Response, NextFunction } from "express";
import { NotFoundError } from "./notFoundError";

const errorHandler = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof NotFoundError) {
    return res.status(err.statusCode).json(err.serializeErrors());
  }

};

export {errorHandler}
