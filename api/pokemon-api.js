import { request } from "./config";

export const fetchPokemon = async (params) => {
  const { limit, offset } = params;
  const res = request.get(`/pokemon/?offset=${offset}&limit=${limit}`);
  return res;
};
