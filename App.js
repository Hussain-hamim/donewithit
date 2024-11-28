import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={() => console.log("pressed")}>
        Hello world Hello worldHello worldHello worldHello worldHello worldHello
        worldHello worldHello world!
      </Text>
      <Image
        fadeDuration={1000}
        style={{ width: 100, height: 100 }}
        source={require("./assets/icon.png")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
