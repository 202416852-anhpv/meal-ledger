import { Router } from "express";
import { ParticipantController } from "../controllers/ParticipantController";

const router = Router();

router.get("/", ParticipantController.getAll);
router.get("/:id", ParticipantController.getById);
router.post("/", ParticipantController.create);
router.put("/:id", ParticipantController.update);
router.delete("/:id", ParticipantController.delete);

export default router;
