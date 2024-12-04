import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListItem from "./app/components/ListItem";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ImageInput } from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [imageUris, setimageUris] = useState([]);

  const handleAdd = (uri) => {
    setimageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setimageUris(imageUris.filter((u) => u !== uri));
  };

  return (
    <Screen>
      <ImageInputList
        onAddImage={(uri) => handleAdd(uri)}
        onRemoveImage={(uri) => handleRemove(uri)}
        imageUris={imageUris}
      />
    </Screen>
  );
}
