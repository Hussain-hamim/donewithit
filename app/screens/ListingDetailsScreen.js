import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
// import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import ContactSellerForm from "../components/ContactSellerForm";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";
import { Link } from "@react-navigation/native";
import routes from "../navigation/routes";

function ListingDetailsScreen({ route, navigation }) {
  const listing = route.params;

  return (
    <ScrollView>
      {/* <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
      > */}
      <Image
        style={styles.image}
        // preview={{ uri: listing.images[0].thumbnailUrl }}
        // tint="light"
        // uri={listing.images[0].url}
        source={listing.images[0].url}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>${listing.price}</Text>
        <View
          style={styles.userContainer}
          // onPress={() => navigation.navigate("Listings")}
          // href="AccountScreen"
        >
          <ListItem
            image={require("../assets/hamim.jpg")}
            title="Hussain Hamim"
            subTitle="5 Listings"
            onPress={() => navigation.navigate("Account")}
          />
        </View>
        <ContactSellerForm listing={listing} />
      </View>
      {/* </KeyboardAvoidingView> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
