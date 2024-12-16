import React, { useEffect, useState } from "react";

import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingsScreen";
import Screen from "./app/components/Screen";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ImageInputList from "./app/components/ImageInputList";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigator from "./app/navigation/AuthNavigator";
// eslint-disable-next-line import/namespace
import { StatusBar } from "expo-status-bar";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import { Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const netInfo = useNetInfo();
  console.log(netInfo.isInternetReachable);

  const demo = async () => {
    try {
      await AsyncStorage.setItem("person", JSON.stringify({ id: 1 }));
      const value = await AsyncStorage.getItem("person");
      const person = JSON.parse(value);
      console.log(person);
    } catch (error) {
      console.log(error);
    }
  };

  demo();

  return (
    <NavigationContainer theme={navigationTheme}>
      <StatusBar />
      <AppNavigator />
    </NavigationContainer>
  );
}
