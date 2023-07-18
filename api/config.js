import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";
const request = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

export { request };
