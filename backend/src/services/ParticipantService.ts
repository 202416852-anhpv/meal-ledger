import type { IParticipant } from "../models/Participant";
import { ParticipantRepo } from "../repos/ParticipantRepo";

export const ParticipantService = {
  async getAll(ownerId: string): Promise<IParticipant[]> {
    if (!ownerId) {
      throw new Error("ownerId is required");
    }
    return ParticipantRepo.getAll(ownerId);
  },
  async getById(id: string): Promise<IParticipant> {
    const participant = await ParticipantRepo.getById(id);
    if (!participant) {
      throw new Error("Participant not found");
    }
    return participant;
  },
  async create(data: {
    name: string;
    ownerId: string;
    totalDebt?: number;
  }): Promise<IParticipant> {
    if (!data.name || !data.ownerId) {
      throw new Error("name and ownerId are required");
    }
    return ParticipantRepo.create(data);
  },
  async update(id: string, data: Partial<IParticipant>): Promise<IParticipant> {
    const participant = await ParticipantRepo.update(id, data);
    if (!participant) {
      throw new Error("Participant not found");
    }
    return participant;
  },
  async delete(id: string): Promise<void> {
    const participant = await ParticipantRepo.delete(id);
    if (!participant) {
      throw new Error("Participant not found");
    }
  },
};
