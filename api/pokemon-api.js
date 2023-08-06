import { request } from "./config";

export const fetchPokemon = async (params) => {
  const { limit, offset } = params;
  const res = await request.get(`/pokemon/?offset=${offset}&limit=${limit}`);
  return res;
};

export const fetchPokemonDetail = async (params) => {
  const res = await request.get(`/pokemon/${params}`);
  return res;
};

export const fetchType = async (params) => {
  // https://pokeapi.co/api/v2/type/
  const { limit, offset } = params;

  const res = await request.get(`/type/?offset=${offset}&limit=${limit}`);
  return res;
};
