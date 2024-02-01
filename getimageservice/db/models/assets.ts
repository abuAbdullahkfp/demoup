import { Schema, Types, model } from "mongoose";
import { IAssetDoc, IAssetModel } from "../../types/asset";
import { SchemaRef } from "../../constant/entity";

export const AssetSchema = new Schema(
  {
    image: { type: Buffer, required: true },
    imageId: { type: String, required: true },
    publicImageUrl: {type: String, required: true}
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform(doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

const Assets = model<IAssetDoc, IAssetModel>(SchemaRef.ASSET, AssetSchema);

export { Assets };
