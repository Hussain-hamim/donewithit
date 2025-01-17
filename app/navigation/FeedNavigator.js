import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="Listings"
        component={ListingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ListingDetails"
        component={ListingDetailsScreen}
        // options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
