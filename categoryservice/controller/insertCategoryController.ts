import { Request, Response } from "express";
import { InserCategoriesControllerT } from "../types/controller";
import { IPostCategoriesRequest } from "../types/post-categories-request";
import { Categories } from "../db/models/categories";

const InserCategoriesController = (): InserCategoriesControllerT => {
  const postCategoryImage = async (
    req: Request<{}, {}, IPostCategoriesRequest, {}>,
    res: Response
  ) => {
    const { categories, imageId } = req.body;
    const insert_categories = await Categories.create({
      categories,
      imageId,
    });
    return res.status(201).json(insert_categories);
  };

  return {
    postCategoryImage,
  };
};

const insertCategoriesController = InserCategoriesController();

export { insertCategoriesController };
