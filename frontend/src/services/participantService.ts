import { apiClient } from "./apiClient";

export const participantService = {
  getAll: async () => {
    const response = await apiClient.get("/api/participants");
    return response.data;
  },
  create: async (name: string, debt: number) => {
    const response = await apiClient.post("/api/participants/", { name, debt });
    return response.data;
  },
  delete: async (_id: string) => {
    const response = await apiClient.delete(`/api/participants/${_id}`);
    return response.data;
  },
};
