import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingsScreen from "../screens/ListingsScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountScreen from "../screens/AccountScreen";

import React from "react";
import FeedNavigator from "./FeedNavigator";

const Tabs = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="ListingEdit"
        component={ListingEditScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default AppNavigator;
