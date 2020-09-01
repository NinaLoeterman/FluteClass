import React from "react";
import { View, Text, StyleSheet, Picker } from "react-native";
import Student from "./student/student";
import RNPickerSelect from "react-native-picker-select";
import { Ionicons } from "@expo/vector-icons";

const StudentsPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>The Studio</Text>
        <View style={styles.dropdown}>
          <RNPickerSelect
            placeholder={{
              label: "Choose a Studio",
              value: null,
            }}
            onValueChange={(value) => console.log(value)}
            items={[
              { label: "Stricker", value: "stricker" },
              { label: "Jerusalem Academy", value: "jamd" },
            ]}
          />
          <Ionicons
            style={styles.dropDownArrow}
            name="ios-arrow-down"
            size={14}
            color="grey"
          />
        </View>
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
  dropdown: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
  },
  dropDownArrow: {
    marginLeft: 10,
    alignSelf: "center",
  },
});

export default StudentsPage;
