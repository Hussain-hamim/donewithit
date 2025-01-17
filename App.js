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
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";
import {
  Button,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import App2 from "./App2";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [user, setUser] = useState();
  const [me, setMe] = useState();

  console.log("me storage:", me);

  const restoreUser = async () => {
    const value = await AsyncStorage.getItem("user");
    const user = JSON.parse(value);
    setUser(user);
  };

  useEffect(() => {
    restoreUser();
  }, []);
  console.log("user: ", user);

  useEffect(() => {
    AsyncStorage.setItem("me", "me");

    const prepareApp = async () => {
      const value = await AsyncStorage.getItem("me");
      setMe(value);
      if (value) {
        SplashScreen.hideAsync();
      }
    };

    prepareApp();
  }, []);

  if (!me) {
    return null;
  }

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
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
    // <>
    //   <StatusBar style="light" />
    //   <App />
    // </>
  );
}
