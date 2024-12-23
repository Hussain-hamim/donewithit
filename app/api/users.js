import apiClient from "./client";

const register = (userInfo) => apiClient.post("/users", userInfo);

export default {
  register,
};

const users = [
  {
    id: 1,
    name: "Mosh",
    email: "mosh@domain.com",
    password: "12345",
  },
  {
    id: 2,
    name: "John",
    email: "john@domain.com",
    password: "12345",
  },
  {
    id: 3,
    name: "Hussain",
    email: "hussainhamim@gmail.com",
    password: "12345",
  },
  {
    id: 4,
    name: "Hussain",
    email: "hsn@dev.com",
    password: "12345",
  },
];
