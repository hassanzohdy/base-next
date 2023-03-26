import Endpoint from "@mongez/http";

export const endpoint = new Endpoint({
  baseURL: process.env.API_URL,
});
