import express, { Request, Response, NextFunction } from "express";
import helmet from "helmet";
import cors from "cors";

import { options } from "./utils/cors-option";
import { errorHandler } from "./error/error-handler";
import { asyncHandler } from "./utils/async-handler";
import { NotFoundError } from "./error/notFoundError";
import { insertImageRouter } from "./router/insertImage.router";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors(options));

const apiVersion = 'v1'

app.use(`api/${apiVersion}`, insertImageRouter)

asyncHandler(
  app.all("*", async (req: Request, res: Response, next: NextFunction) => {
    return next(new NotFoundError());
  })
);
 
app.use(errorHandler);

export { app };
