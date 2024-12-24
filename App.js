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
import { Image, StyleSheet, Text, View } from "react-native";
import { FontAwesome5, FontAwesome6 } from "@expo/vector-icons";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);
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
    // <AuthContext.Provider value={{ user, setUser }}>
    //   <StatusBar />
    //   <OfflineNotice />
    //   <NavigationContainer theme={navigationTheme}>
    //     {user ? <AppNavigator /> : <AuthNavigator />}
    //   </NavigationContainer>
    // </AuthContext.Provider>
    <>
      <StatusBar />
      <App2 />
    </>
  );
}

const App2 = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("./app/assets/camera1_full.jpg")}
        style={{ width: "100%", height: 200 }}
        resizeMode="stretch"
      />

      <Image
        style={{
          width: 150,
          height: 150,
          borderRadius: 150,
          borderWidth: 5,
          borderColor: "white",
          marginTop: -75,
        }}
        source={require("./app/assets/hamim.jpg")}
      />

      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Hussain Hamim</Text>
      <Text>Founder of this application</Text>

      <View style={{ flexDirection: "row", marginVertical: 10, gap: 10 }}>
        <FontAwesome6 name="github" size={24} color="black" />
        <FontAwesome6 name="x-twitter" size={24} color="black" />
        <FontAwesome6 name="at" size={24} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    // justifyContent: "center",
  },
});
