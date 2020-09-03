import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Login from "./components/login/Login.jsx";
import EntryPage from "./components/entryPage/EntryPage.jsx";
import StudentsPage from "./components/studentsPage/StudentsPage.jsx";
import "react-native-gesture-handler";
import Student from "./components/studentsPage/student/student.jsx";
import StudentProfile from "./components/studentProfile/StudentProfile.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  const [isEntry, setIsEntry] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsEntry(false);
    }, 2000);
  }, []);

  return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={isEntry ? EntryPage : Login} />
          <Stack.Screen name="StudentsPage" component={StudentsPage} />
          <Stack.Screen name="StudentProfile" component={StudentProfile} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebf4f8",
    alignItems: "center",
    justifyContent: "center",
  },
});
