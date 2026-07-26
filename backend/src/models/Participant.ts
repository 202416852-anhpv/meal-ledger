import mongoose, { Document, Schema } from "mongoose";

export interface IParticipant extends Document {
  name: string;
  totalDebt: number;
  ownerId: string;
}

const ParticipantSchema = new Schema<IParticipant>(
  {
    name: { type: String, required: true },
    totalDebt: { type: Number, default: 0 },
    ownerId: { type: String, required: true },
  },
  { timestamps: true },
);

export const Participant = mongoose.model<IParticipant>(
  "Participant",
  ParticipantSchema,
);
