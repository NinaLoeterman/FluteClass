import React, { useEffect } from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";


const Login = () => {
  
  const navigation = useNavigation();


  return (
    <View>
      <Text>Login</Text>
      <TextInput style={styles.loginInput} placeholder="email" />
      <TextInput style={styles.loginInput} placeholder="password" />
      <Button
        title={"Submit"}
        onPress={() => navigation.navigate('studentsPage')}
      />
      <Button
        title={"Sign in with Google"}
        onPress={() => alert("button pressed")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginInput: {
    borderColor: "black",
    borderBottomWidth: 1,
    marginTop: 10,
  },
});

export default Login;
