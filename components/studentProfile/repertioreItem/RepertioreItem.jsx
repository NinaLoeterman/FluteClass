import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Switch } from "react-native-gesture-handler";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { Ionicons } from "@expo/vector-icons";

const RepertioreItem = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <View>
        <Text>Mozart</Text>
        <Text>sinfonia concertante</Text>
      </View>
      <View style={styles.repInfo}>
        <View style={styles.timeInfo}>
          <Text>2</Text>
          <Text>weeks</Text>
        </View>
        <Ionicons
          style={styles.micOff}
          name="ios-mic-off"
          size={40}
          color="#ff7171"
        />
        {/* <Switch
          trackColor={{ false: "#dbe2ea", true: "#14a38b" }}
          thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'space-between',
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "rgb(44, 39, 56)",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.04,
    shadowRadius: 3.84,
    elevation: 5,
  },
  repInfo: {
      flexDirection: 'row'
  },
  timeInfo: {
      justifyContent: 'center',
      alignItems: 'center'
  }
});
export default RepertioreItem;
