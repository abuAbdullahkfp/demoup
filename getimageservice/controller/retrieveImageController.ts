import { Request, Response } from "express";
import { RetrieveImageControllerT } from "../types/controller";
import { Assets } from "../db/models/assets";
import { IImageRequestParams } from "../types/image-request-params";

const RetrieveImageController = (): RetrieveImageControllerT => {
  const getImageAssetById = async (
    req: Request<IImageRequestParams, {}, {}, {}>,
    res: Response
  ) => {
    const { id } = req.params;
    const image = await Assets.findOne({ imageId: id });
    return res.status(200).json(image);
  };
  return {
    getImageAssetById,
  };
};

const retrieveImageController = RetrieveImageController();
export { retrieveImageController };
