import type { Request, Response } from "express";
import { AuthService } from "../services/AuthService";

export const AuthController = {
  async googleLogin(req: Request, res: Response): Promise<void> {
    try {
      const { credential } = req.body;
      const result = await AuthService.googleLogin(credential);
      res.json(result);
    } catch (error) {
      res.status(401).json({
        message:
          error instanceof Error ? error.message : "Authentication failed",
      });
    }
  },
};
