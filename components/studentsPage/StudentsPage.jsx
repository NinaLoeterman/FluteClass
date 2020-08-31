import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Student from "./student/student";

const StudentsPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>The Studio</Text>
        <Text style={styles.dropdown}>dropdown</Text>
      </View>

      <Student />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: "#ebf4f8",
  },
  title: {
    fontSize: 24,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});

export default StudentsPage;
