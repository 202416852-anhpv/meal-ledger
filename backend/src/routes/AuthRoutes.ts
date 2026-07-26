import { Router } from "express";
import { AuthController } from "../controllers/AuthController";

const router = Router();

router.post("/google", AuthController.googleLogin);

export default router;
