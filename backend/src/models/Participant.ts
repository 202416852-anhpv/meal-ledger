import mongoose, { Schema } from "mongoose";

export interface IParticipant {
  name: string;
  debt: number;
}

const participantSchema = new Schema<IParticipant>(
  {
    name: { type: String, required: true, trim: true },
    debt: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  },
);

export const ParticipantModel = mongoose.model<IParticipant>(
  "Participant",
  participantSchema,
);
