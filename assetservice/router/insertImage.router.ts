import { Router } from "express";
import { insertImageController } from "../controller/insertImageController";
import { asyncHandler } from "../utils/async-handler";

const router = Router();

router.post(
  "/insert-image",
  asyncHandler(insertImageController.postImageAsset)
);

export { router as insertImageRouter };
