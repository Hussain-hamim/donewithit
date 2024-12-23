import { useContext } from "react";
import AuthContext from "./context";
import authStorage from "./storage";
import { jwtDecode } from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  console.log(user);

  const logIn = (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user);
    authStorage.storeToken(authToken);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
    AsyncStorage.removeItem("user");
  };

  return { user, logOut, logIn };
};

export default useAuth;
