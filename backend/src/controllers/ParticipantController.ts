import type { Request, Response } from "express";
import { ParticipantService } from "../services/ParticipantService";

export const ParticipantController = {
  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const ownerId = req.query.ownerId as string;
      const participant = await ParticipantService.getAll(ownerId);
      res.json(participant);
    } catch (error) {
      res.status(400).json({
        message: error instanceof Error ? error.message : "Unknown error",
      });
    }
  },
  async getById(req: Request<{ id: string }>, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const participant = await ParticipantService.getById(id);
      res.json(participant);
    } catch (error) {
      res.status(400).json({
        message: error instanceof Error ? error.message : "Unknown error",
      });
    }
  },
  async create(req: Request, res: Response): Promise<void> {
    try {
      const participant = await ParticipantService.create(req.body);
      res.status(201).json(participant);
    } catch (error) {
      res.status(400).json({
        message: error instanceof Error ? error.message : "Unknown error",
      });
    }
  },
  async update(req: Request<{ id: string }>, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const participant = await ParticipantService.update(id, req.body);
      res.json(participant);
    } catch (error) {
      res.status(400).json({
        message: error instanceof Error ? error.message : "Unknown error",
      });
    }
  },
  async delete(req: Request<{ id: string }>, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await ParticipantService.delete(id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({
        message: error instanceof Error ? error.message : "Unknown error",
      });
    }
  },
};
