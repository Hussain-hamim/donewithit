import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.170.79:9000/api",
  // baseURL: "./data.js",
  // baseURL: "http://localhost:9000/api",
});

export default apiClient;
