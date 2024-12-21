import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListingEditScreen from "../screens/ListingEditScreen";

import React, { useEffect, useState } from "react";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";
import routes from "../navigation/routes";

import * as Notifications from "expo-notifications";
import expoPushTokens from "../api/expoPushTokens";

const Tabs = createBottomTabNavigator();

const AppNavigator = () => {
  const [expoPushToken, setExpoPushToken] = useState("");

  // remote notification:
  const registerForPushNotification = async () => {
    try {
      // const permission = await Permission.askAsync(Permission.NOTIFICATION);
      const permission = await registerForPushNotification().then(
        (token) => token && setExpoPushToken(token)
      );
      if (!permission) return;

      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokens.register(token);
      console.log(token);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    registerForPushNotification();
    Notifications.addNotificationReceivedListener((notification) => {
      // setNotification(notification);
      console.log(notification);
    });
  }, []);

  // local notification:
  const showNotification = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Time's up!",
        body: "Change sides!",
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: 60,
      },
    });
  };

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
        options={({ navigation }) => ({
          headerShown: false,
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.LISTING_EDIT)}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tabs.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default AppNavigator;
