import { Request, Response } from "express";
import { InserCategoriesControllerT } from "../types/controller";


const InserCategoriesController = (): InserCategoriesControllerT => {
  const postCategoryImage = async (
    req: Request<{}, {}, {}, {}>,
    res: Response
  ) => {};

  return {
    postCategoryImage,
  };
};

const insertCategoriesController = InserCategoriesController();

export { insertCategoriesController };
