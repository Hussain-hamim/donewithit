import { FontAwesome6 } from "@expo/vector-icons";
import {
  Button,
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ProjectCard from "./ProjectCard";

export default function App2() {
  const name = "Hussain Hamim";
  const links = {
    github: "Hussain-hamim",
    email: "mohammadhussainafghan83@gmail.com",
    x: "hussainhamim_",
  };

  const getOccupation = () => {
    return "Founder of this app";
  };

  const renderIcons = () => {
    return (
      <View style={{ flexDirection: "row", marginVertical: 10, gap: 10 }}>
        {links.github && <FontAwesome6 name="github" size={24} color="black" />}
        {links.x && <FontAwesome6 name="x-twitter" size={24} color="black" />}
        {links.email && <FontAwesome6 name="at" size={24} color="black" />}
      </View>
    );
  };

  const onContactMe = () => {
    Linking.openURL("mailto:mohammadhussainafghan83@gmail.com");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["bottom"]}>
        <ScrollView>
          <View style={styles.container}>
            <Image
              source={require("./app/assets/computer.jpg")}
              style={{ width: "100%", height: 200 }}
            />

            <Image
              source={require("./app/assets/hamim.jpg")}
              style={{
                width: 150,
                height: 150,
                borderRadius: 150,
                borderWidth: 5,
                borderColor: "white",
                marginTop: -75,
              }}
            />

            <Text style={{ fontSize: 30, fontWeight: "bold" }}>{name}</Text>
            <Text>{getOccupation()}</Text>

            {renderIcons()}

            <Button
              title="Contact me"
              onPress={onContactMe}
              color="lightblue"
            />

            <Text style={{ padding: 10, fontSize: 16, lineHeight: 20 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>

            <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 20 }}>
              Projects
            </Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 10, padding: 10 }}
            >
              <ProjectCard
                name="Apple Cards"
                image={require("./app/assets/chair.jpg")}
              />
              <ProjectCard
                name="Flappy bird"
                image={require("./app/assets/jacket.jpg")}
              />
              <ProjectCard
                name="Trello"
                image={require("./app/assets/hamim.jpg")}
              />
              <ProjectCard
                name="Todo app"
                image={require("./app/assets/computer.jpg")}
              />
            </ScrollView>

            <StatusBar style="light" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
