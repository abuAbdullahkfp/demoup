import { Router } from "express";
import { asyncHandler } from "../utils/async-handler";
import { insertCategoriesController } from "../controller/insertCategoryController";

const router = Router();

router.post(
  "/insert-categories",
  asyncHandler(insertCategoriesController.postCategoryImage)
);



export { router as insertCategoriesRouter };