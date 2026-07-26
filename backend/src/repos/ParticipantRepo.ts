import { Participant, type IParticipant } from "../models/Participant";

export const ParticipantRepo = {
  async getAll(ownerId: string): Promise<IParticipant[]> {
    return Participant.find({ ownerId });
  },
  async getById(id: string): Promise<IParticipant | null> {
    return Participant.findById(id);
  },
  async create(data: Partial<IParticipant>): Promise<IParticipant> {
    return Participant.create(data);
  },
  async update(
    id: string,
    data: Partial<IParticipant>,
  ): Promise<IParticipant | null> {
    return Participant.findByIdAndUpdate(id, data, { new: true });
  },
  async delete(id: string): Promise<IParticipant | null> {
    return Participant.findByIdAndDelete(id);
  },
};
