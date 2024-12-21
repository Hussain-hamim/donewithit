import { create } from "apisauce";
import cache from "../utility/cache";
import authStorage from "../auth/storage";
import settings from "../config/settings";

const apiClient = create({
  // baseURL: "http://192.168.237.143:9000/api",
  baseURL: settings.apiUrl,
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },
});

// this is how we can get protected api endpoint
apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});

// Add monitoring for requests and responses
apiClient.addMonitor((response) => {
  console.log("API Response:", {
    url: response.config.url,
    status: response.status,
    data: response.data,
    problem: response.problem,
  });
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  //
  const response = await get(url, params, axiosConfig);
  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
