import React, { useContext, useEffect, useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import Screen from "../components/Screen";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";
import AuthContext from "../auth/context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const [loginFailed, setLoginFailed] = useState(false);
  const { logIn } = useAuth();
  const { user, setUser } = useContext(AuthContext);
  const [lastUser, setlastUser] = useState({});

  // console.log(user);

  // const handleSubmit = async ({ email, password }) => {
  //   const result = await authApi.login(email, password);
  //   if (!result.ok) return setLoginFailed(true);

  //   setLoginFailed(false);
  //   logIn(result.data);
  // };

  useEffect(() => {
    const getUser = async () => {
      const value = await AsyncStorage.getItem("user");
      const user = JSON.parse(value);
      setlastUser({ email: user.email, password: user.password });
    };

    getUser();
  }, []);

  const handleSubmit = ({ email, password }) => {
    if (true) {
      setUser({ email: email, password: password });
      AsyncStorage.setItem(
        "user",
        JSON.stringify({ email: email, password: password })
      );
    } else {
      setLoginFailed(true);
    }
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid email and/or password."
          visible={loginFailed}
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
        <SubmitButton title="Login" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
