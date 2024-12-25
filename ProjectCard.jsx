import { View, Image, Text, StyleSheet } from "react-native";

export default function ProjectCard({ name, image }) {
  return (
    <View>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "200",
    height: 200,
    borderRadius: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: "dimgray",
    marginTop: 10,
  },
});
