import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
  const mongoURI = process.env.MONGO_URI;
  if (!mongoURI) {
    console.error("Error: MONGO_URI is missing in .env file!");
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("MongoDB connected failed:", error);
    process.exit(1);
  }
};
