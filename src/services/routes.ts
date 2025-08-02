import { api } from "./api";

const championshipId = 14;

export const getMatches = () => {
  return api.get(`/campeonatos/${championshipId}/partidas`);
};

export const getTeamById = async (
  id: number | null
): Promise<{ nome: string; escudo: string }> => {
  const response = await api.get<{ nome: string; escudo: string }>(
    `/times/${id}`
  );
  return response.data;
};

export const getMatchById = async (id: number | null) => {
  const response = await api.get(`/partidas/${id}`);
  return response.data;
};
