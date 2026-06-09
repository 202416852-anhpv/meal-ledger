import { apiClient } from "./apiClient";

export const participantService = {
  getAll: async () => {
    const response = await apiClient.get("/api/participants");
    return response.data;
  },
};
