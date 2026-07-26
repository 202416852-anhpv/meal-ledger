import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db";
import participantRoutes from "./routes/ParticipantRoutes";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(cors());
app.use(express.json());

app.use("/api/participants", participantRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
