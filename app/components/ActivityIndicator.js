import React from "react";
// import LottieView from "lottie-react-native";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import colors from "../config/colors";

function ActivityIndicator1({ visible = false }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      {/* <LottieView
        autoPlay
        loop
        source={require(require("/animations/loader.json")}
      /> */}
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: "white",
    height: "100%",
    opacity: 0.8,
    width: "100%",
    zIndex: 1,
    paddingTop: 50,
  },
});

export default ActivityIndicator1;
