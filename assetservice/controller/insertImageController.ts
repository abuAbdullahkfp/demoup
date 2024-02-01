import { InsertImageControllerT } from "../types/controller";
import { Request, Response } from "express";
import { IPostImageRequest } from "../types/post-image-request";
import { Assets } from "../db/models/assets";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const InsertImageController = (): InsertImageControllerT => {
  const postImageAsset = async (
    req: Request<{}, {}, IPostImageRequest, {}>,
    res: Response
  ) => {
    const image_id = uuidv4();
    const { imageUrl, categories } = req.body;
    const imageResponse = await axios.get(imageUrl, {
      responseType: "arraybuffer",
    });
    const imageBuffer = Buffer.from(imageResponse.data, "binary");

    const inserted_image = await Assets.create({
      image: imageBuffer,
      imageId: image_id,
      publicImageUrl: `${image_id}.jpg`,
    });
    const event = await axios.post("http://eventbus:3005/events", {
      event: {
        type: "AssetCreated",
        data: {
          imageId: image_id,
          publicImageUrl: `${image_id}.jpg`,
          categories,
        },
      },
    });

    return res.status(201).json(inserted_image);
  };


  return {
    postImageAsset,
  };
};

const insertImageController = InsertImageController();

export { insertImageController };
