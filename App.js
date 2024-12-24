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
      {/* <StatusBar style="auto" /> */}
      <App2 />
    </>
  );
}

const App2 = () => {
  const onContactMe = () => {
    Linking.openURL("mailto:mohammadhussainafghan83@gmail.com");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["bottom"]} backgroundColor="gray">
        <ScrollView>
          <View style={styles.container}>
            <Image
              source={require("./app/assets/computer.jpg")}
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

            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              Hussain Hamim
            </Text>
            <Text>Founder of this application</Text>

            <View style={{ flexDirection: "row", marginVertical: 10, gap: 10 }}>
              <FontAwesome6 name="github" size={24} color="black" />
              <FontAwesome6 name="x-twitter" size={24} color="black" />
              <FontAwesome6 name="at" size={24} color="black" />
            </View>

            <Button title="Contact Me" onPress={onContactMe} color="darkgray" />

            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              nesciunt magnam aliquam atque quo velit veniam, corrupti sunt
              facilis perferendis dolorum nulla quasi, quas possimus voluptatem
              fugit Ipsam optio error est rem aperiam, excepturi explicabo
              deleniti! Ipsam optio error est rem aperiam, excepturi explicabo
              deleniti! Ipsam optio error est rem aperiam, placeat natus
              quibusdam officia vel aliquid nesciunt aut nemo delectus sed sit
              architecto assumenda provident dolorum. Alias sit eaque ad
              excepturi explicabo deleniti! Ipsam optio error est rem aperiam,
              excepturi explicabo deleniti! Ipsam optio error est rem aperiam,
              excepturi explicabo deleniti! Ipsam optio error est rem aperiam,
              excepturi explicabo deleniti! Ipsam optio error est rem aperiam,
              excepturi explicabo deleniti! Ipsam optio error est rem aperiam,
              excepturi explicabo deleniti! Ipsam optio error est rem aperiam,
              excepturi explicabo deleniti! Ipsam optio error est rem aperiam,
              excepturi explicabo deleniti! Ipsam optio error est rem aperiam,
              excepturi explicabo deleniti! Ipsam optio error est rem aperiam,
              placeat natus quibusdam officia vel aliquid nesciunt aut nemo
              delectus sed sit architecto assumenda provident dolorum. Alias sit
              eaque ad excepturi explicabo deleniti! Ipsam optio error est rem
              aperiam, excepturi explicabo deleniti! Ipsam optio error est rem
              aperiam, excepturi explicabo deleniti! Ipsam optio error est rem
              aperiam, excepturi explicabel aliquid nesciunt aut nemo delectus
              sed sit architecto assumenda provident dolorum. Alias sit eaque ad
              officia magni recusandae dignissimos tenetur explicabo, est modi
              odio, doloremque vitae sequi eveniet molestiae? Magnam nam sequi
              laboriosam odit accusamus qui? blanditiis beatae eius, tenetur,
              enim animi voluptate non asperiores excepturi explicabo deleniti!
              Ipsam optio error est rem aperiam, placeat natus quibusdam officia
              vel aliquid nesciunt aut nemo delectus sed sit architecto
              assumenda provident dolorum. Alias sit eaque ad officia magni
              recusandae dignissimos tenetur explicabo, est modi odio,
              doloremque vitae sequi eveniet molestiae? Magnam nam sequi
              laboriosam odit accusamus qui? blanditiis beatae e
            </Text>

            <StatusBar style="light" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
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
