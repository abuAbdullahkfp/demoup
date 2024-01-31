import { InsertImageControllerT } from "../types/controller";
import { Request, Response } from "express";

const InsertImageController = (): InsertImageControllerT => {
  const postImageAsset = async (
    req: Request<{}, {}, {}, {}>,
    res: Response
  ) => {
    console.log(req.body, 's')
    return res.status(201).json({ hello: "word" });
  };

  const getImageAsset = async( req: Request,
    res: Response) => {

  }

  return {
    postImageAsset,
    getImageAsset
  };
};

const insertImageController = InsertImageController();

export { insertImageController };
