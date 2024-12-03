import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "./Icon";
import AppText from "./AppText";

const CategoryPickerItem = ({ onPress, item }) => {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 16,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 8,
    textAlign: "center",
  },
});

export default CategoryPickerItem;
