import React from "react";
import { View, Text, ActivityIndicator, Image } from "react-native";

const EntryPage = () => {
  return (
    <View>
      <Image source={require("../pics/PlayStudioVersion.png")} />
      {/* <ActivityIndicator size="large" /> */}
      {/* <Text>Im the Entry Page</Text> */}
    </View>
  );
};

export default EntryPage;
