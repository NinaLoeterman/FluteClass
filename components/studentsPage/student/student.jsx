import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

const Student = () => {
  return (
    <View style={styles.container}>
      <View style={styles.studentContainer}>
        <Image style={styles.profilePic} source={require("/Users/ninaloeterman/FluteClassProject/FluteClass/components/pics/tim-mossholder-vhsN1p7Cc_8-unsplash.jpg")}/>
        <Text>student</Text>
      </View>
      <Text style={styles.studentContainer}>student</Text>
      <Text style={styles.studentContainer}>student</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  studentContainer: {
    flexDirection: 'row',
    width: vw(90),
    height: 100,
    backgroundColor: "yellow",
  },
  profilePic: {
      width: 50,
      height: 50,
      borderRadius: 50/2,
  }
});
export default Student;
