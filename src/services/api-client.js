import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://vibevault-zeta.vercel.app/api/v1",
});

export default apiClient;