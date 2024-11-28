// import { StatusBar } from "expo-status-bar";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,  
  Platform,
  Button,
  Text,
  Dimensions,
} from "react-native";

export default function App() {

  console.log("dime width: ", "", Dimensions.get('screen').width)
  console.log("dime height: ", "", Dimensions.get('screen').height)


  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView>
        <Button
          title="click me"
          onPress={() => alert.alert("prompt", "hello")}
        />
        <Text> hello wrold </Text>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
