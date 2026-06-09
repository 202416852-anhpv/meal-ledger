import type { NextFunction, Request, Response } from "express";
import { ParticipantModel } from "../models/Participant.js";

// GET http://localhost:5000/api/participants
export const getParticipants = async (
  _req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const participants = await ParticipantModel.find();

    res.status(200).json({
      success: true,
      count: participants.length,
      data: participants,
    });
  } catch (err) {
    next(err);
  }
};

// POST http://localhost:5000/api/participants
export const createParticipant = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { name, debt } = req.body;
    const newParticipant = await ParticipantModel.create({ name, debt });

    res.status(201).json({
      success: true,
      message: "Participant created successfully",
      data: newParticipant,
    });
  } catch (err) {
    next(err);
  }
};

// PUT http://localhost:5000/api/participants/:id
export const updateParticipant = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, debt } = req.body;

    const updatedParticipant = await ParticipantModel.findByIdAndUpdate(
      id,
      { name, debt },
      { returnDocument: "after", runValidators: true },
    );

    if (!updatedParticipant) {
      res
        .status(404)
        .json({ success: false, message: "Participant not found" });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Participant updated successfully",
      data: updatedParticipant,
    });
  } catch (err) {
    next(err);
  }
};

// DELETE http://localhost:5000/api/participants/:id
export const deleteParticipant = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { id } = req.params;

    const deletedParticipant = await ParticipantModel.findByIdAndDelete(id);

    if (!deletedParticipant) {
      res
        .status(404)
        .json({ success: false, message: "Participant not found" });
      return;
    }

    res
      .status(200)
      .json({
        success: true,
        message: "Participant has been deleted",
        data: deletedParticipant,
      });
  } catch (err) {
    next(err);
  }
};
