import express from "express";

import {
  getParticipants,
  createParticipant,
  updateParticipant,
  deleteParticipant,
} from "../controllers/participantController.js";

const router = express.Router();

router.get("/", getParticipants as any);
router.post("/", createParticipant as any);
router.put("/:id", updateParticipant as any);
router.delete("/:id", deleteParticipant as any);

export default router;
