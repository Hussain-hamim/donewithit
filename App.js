import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Platform,
  View,
} from "react-native";

export default function App() {
  // const orientation = useDeviceOrientation();
  // const dimension = useDimension();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 2,
          backgroundColor: "lightblue",

          // width: "100%",
          // height: "30%",
          // height: orientation.landscape ? "%100" : "30%"
        }}
      />
      <View style={{ backgroundColor: "lightblue", flex: 1 }} />
      <View style={{ backgroundColor: "gold", flex: 1 }} />
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
