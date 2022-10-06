import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  headers: { Accept: "application/json" },
  baseURL: "https://api.tvmaze.com",
});

export default apiClient;
