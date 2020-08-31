import React from "react";
import * as firebase from "firebase";
import "firebase/auth";
import { Button, View, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";



// firebase.analytics();

// firebase.auth().onAuthStateChanged((user) => {
//     if (user != null) {
//       console.log("We are authenticated now!");
//     }

const Login = () => {
  return <View>
    <Text>Login</Text>
    <TextInput style={styles.loginInput} placeholder='email' />
    <TextInput style={styles.loginInput} placeholder='password'/>
  <Button title={'button'}/>
  </View>;
};

const styles = StyleSheet.create({
  loginInput: {
    borderColor: 'black',
    borderBottomWidth: 1,
    margin: 10
  }

})

export default Login;
