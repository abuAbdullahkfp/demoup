import express, { Request, Response, NextFunction } from "express";
import helmet from "helmet";
import cors from "cors";

import { options } from "./utils/cors-option";
import { errorHandler } from "./error/error-handler";
import { asyncHandler } from "./utils/async-handler";
import { NotFoundError } from "./error/notFoundError";
import { retrieveImageRouter } from "./router/getImageUrl";
import { eventRouter } from "./router/eventRouter.router";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors(options));

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`New Request: Route: ${req.path}`)
    next()
})

const apiVersion = 'v1'

app.use(`/api/${apiVersion}`, retrieveImageRouter)
app.use(`/api/${apiVersion}`,eventRouter)

asyncHandler(
  app.all("*", async (req: Request, res: Response, next: NextFunction) => {
    return next(new NotFoundError());
  })
);
 
app.use(errorHandler);

export { app };
