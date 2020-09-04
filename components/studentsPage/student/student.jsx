import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Student = () => {
  const studentObj = {
    name: "Nina Loeterman",
    years: "Third Year",
    age: "29",
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.studentContainer}
        onPress={() => navigation.navigate("StudentProfile", { name: studentObj.name})}
      >
        <View style={styles.innerStudentContainer}>
          <Image
            style={styles.profilePic}
            source={require("/Users/ninaloeterman/FluteClassProject/FluteClass/components/pics/tim-mossholder-vhsN1p7Cc_8-unsplash.jpg")}
          />
          <View style={styles.studentInfo}>
            <Text style={styles.studentText}>{studentObj.name}</Text>
            <Text style={styles.studentSubText}>{studentObj.years}</Text>
            <Text style={styles.studentSubText}>{studentObj.age}</Text>
          </View>
        </View>
        <Ionicons
          style={styles.arrow}
          name="ios-arrow-forward"
          size={40}
          color="grey"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  studentContainer: {
    flexDirection: "row",
    width: vw(90),
    height: 100,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
    shadowColor: "rgb(44, 39, 56)",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.04,
    shadowRadius: 3.84,
    elevation: 5,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },
  studentInfo: {
    marginLeft: 20,
  },
  studentSubText: {
    color: "#7c9cbf",
  },
  studentText: {
    color: "#0880ae",
    fontSize: 18,
  },
  innerStudentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrow: {
    marginRight: 15,
  },
});
export default Student;
