import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import { errorHandler } from "./middleware/errorHandler.js";
import participantRoutes from "./routes/participantRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/participants", participantRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
