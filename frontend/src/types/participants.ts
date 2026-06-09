export interface Participant {
  _id: string;
  name: string;
  debt: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface ParticipantAPIResponse {
  success: boolean;
  count: number;
  data: Participant[];
}
