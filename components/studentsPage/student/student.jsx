import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

const Student = () => {
  return (
    <View style={styles.container}>
      <View style={styles.studentContainer}>
        <Image style={styles.profilePic} source={require("/Users/ninaloeterman/FluteClassProject/FluteClass/components/pics/tim-mossholder-vhsN1p7Cc_8-unsplash.jpg")}/>
        <View style={styles.studentInfo}>
        <Text style={styles.studentText}>student Name</Text>
        <Text style={styles.studentSubText}>something</Text>
        </View>
      </View>
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
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,

  },
  profilePic: {
      width: 80,
      height: 80,
      borderRadius: 80/2,
  }, 
  studentInfo: {
      marginLeft: 20,
  },
  studentSubText: {
    color: '#7c9cbf'
  },
  studentText: {
      color: '#0880ae',
      fontSize: 18,
  }
});
export default Student;
