import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
// eslint-disable-next-line import/namespace
import { StatusBar } from "expo-status-bar";
import OfflineNotice from "./app/components/OfflineNotice";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";

export default function App() {
  const [user, setUser] = useState([]);

  console.log(user);

  // const restoreUser = async () => {
  //   const user = await authStorage.getUser();
  //   if (user) setUser(user);
  // };

  // useEffect(() => {
  //   restoreUser();
  // }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <StatusBar />
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <StatusBar />
        {user ? <AppNavigator /> : <AuthNavigator />}
        {/* <AppNavigator /> */}
        {/* <ListingsScreen /> */}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
