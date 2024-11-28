import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Touchable,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={() => console.log("pressed")}>
        Hello world Hello worldHello worldHello worldHello worldHello worldHello
        worldHello worldHello world!
      </Text>
      <TouchableNativeFeedback>
        <View
          style={{ width: 100, height: 80, backgroundColor: "dodgerblue" }}
        />
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
