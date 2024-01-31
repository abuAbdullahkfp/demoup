import { InsertImageControllerT } from "../types/controller";
import { Request, Response } from "express";

const InsertImageController = (): InsertImageControllerT => {
  const postImageAsset = async (
    req: Request<{}, {}, {}, {}>,
    res: Response
  ) => {
    res.json({ hello: "word" });
  };

  return {
    postImageAsset,
  };
};

const insertImageController = InsertImageController();

export { insertImageController };
