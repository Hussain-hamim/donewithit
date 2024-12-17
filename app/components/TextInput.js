import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

function AppTextInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <View style={styles.one}>
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={defaultStyles.colors.medium}
            style={styles.icon}
          />
        </View>
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 8,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
    marginLeft: 10,
  },
  one: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppTextInput;
