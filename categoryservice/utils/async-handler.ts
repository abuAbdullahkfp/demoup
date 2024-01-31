import { Request, Response, NextFunction } from "express";

const asyncHandler =
  (cb: Function) => (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(cb(req, res).catch(next));
  };

export { asyncHandler };
