import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import usersApi from "../api/users";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";
import AuthContext from "../auth/context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();
  const { user, setUser } = useContext(AuthContext);

  // const handleSubmit = async (userInfo) => {
  //   try {
  //     const result = await registerApi.request(userInfo);

  //     if (!result) {
  //       setError("An unexpected error occurred.");
  //       console.log("Request failed, no result returned.");
  //       return;
  //     }

  //     if (!result.ok) {
  //       if (result.data) setError(result.data.error);
  //       else {
  //         setError("An unexpected error occurred.");
  //         // console.log(result);
  //       }
  //       return;
  //     }

  //     const { data: authToken } = await loginApi.request(
  //       userInfo.email,
  //       userInfo.password
  //     );
  //     auth.logIn(authToken);
  //   } catch (error) {
  //     setError("An unexpected error occurred.");
  //     console.error("Error during registration:", error);
  //   }
  // };

  const handleSubmit = ({ name, email, password }) => {
    setUser({ name: name, email: email, password: password });
    AsyncStorage.setItem(
      "user",
      JSON.stringify({ name: name, email: email, password: password })
    );
  };

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <Form
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
          <FormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" />
        </Form>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
