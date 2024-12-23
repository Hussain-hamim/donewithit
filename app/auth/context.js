import { createContext } from "react";

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

const AuthContext = createContext();

export default AuthContext;
