import React from "react";
import { View, Text, ActivityIndicator, Image, StyleSheet } from "react-native";

const EntryPage = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../pics/PlayStudioVersion.png")} />
      {/* <ActivityIndicator size="large" /> */}
      {/* <Text>Im the Entry Page</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#ebf4f8",

    }
})

export default EntryPage;
