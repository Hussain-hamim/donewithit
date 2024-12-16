import { create } from "apisauce";

const apiClient = create({
  // baseURL: "http://10.0.2.16:9000/api",
  // baseURL: "http://169.254.58.223:9000/api",
  baseURL: "http://192.168.237.143:9000/api",
  // baseURL: "http://localhost:9000/api",
});

export default apiClient;
