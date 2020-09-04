import React, { useEffect } from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.loginInput} placeholder="email" />
      <TextInput style={styles.loginInput} placeholder="password" />
      <TouchableOpacity
        style={styles.submit}
        onPress={() => navigation.navigate("StudentsPage")}
      >
        <Button color="white" title={"Submit"} />
      </TouchableOpacity>
      {/* <Button
        title={"Sign in with Google"}
        onPress={() => alert("button pressed")}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  loginInput: {
    borderColor: "black",
    borderBottomWidth: 1,
    marginTop: 20,
    padding: 10,
  },
  container: {
    padding: 80,
    backgroundColor: "#ebf4f8",
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 36,
  },
  submit: {
    backgroundColor: "#7c9cbf",
    borderRadius: 10,
    marginTop: 30,
    width: 80,
    alignSelf: "center",
  },
});

export default Login;
