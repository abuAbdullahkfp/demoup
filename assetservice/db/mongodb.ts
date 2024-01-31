import mongoose from "mongoose";

export const connectDb = async (url: string) => {
  return mongoose.connect(url);
};

export const gracefulExit = () => {
  return mongoose.connection.close(true);
};
