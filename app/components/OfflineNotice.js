import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "./Text";
import colors from "../config/colors";

function OfflineNotice(props) {
  const netInfo = useNetInfo();
  const [open, setOpen] = useState(true);

  if (
    netInfo.type !== "unknown" &&
    netInfo.isInternetReachable === false &&
    open
  )
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
        <TouchableOpacity onPress={() => setOpen(false)}>
          <MaterialCommunityIcons name="close" size={24} color="lightgray" />
        </TouchableOpacity>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary,
    height: 44,
    justifyContent: "space-evenly",
    position: "absolute",
    top: Constants.statusBarHeight,
    width: "100%",
    zIndex: 1,
    borderRadius: 12,
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
