import { createApi } from "./api";

const championshipId = 14;

export const getMatches = (apiKey: string | null) => {
  const api = createApi(apiKey);
  return api.get(`/campeonatos/${championshipId}/partidas`);
};

export const getTeamById = async (
  id: number | null,
  apiKey: string | null
): Promise<{ nome: string; escudo: string }> => {
  const api = createApi(apiKey);
  const response = await api.get<{ nome: string; escudo: string }>(
    `/times/${id}`
  );
  return response.data;
};

export const getMatchById = async (
  id: number | null,
  apiKey: string | null
) => {
  const api = createApi(apiKey);
  const response = await api.get(`/partidas/${id}`);
  return response.data;
};
