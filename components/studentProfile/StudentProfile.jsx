import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import RepertioreItem from "./repertioreItem/RepertioreItem";
import { vw } from "react-native-expo-viewport-units";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const StudentProfile = ({ route }) => {
  const navigation = useNavigation();

  const { name } = route.params;

  return (
    <View style={styles.container}>
      <Ionicons
        onPress={() => navigation.goBack()}
        name="ios-arrow-back"
        size={40}
        color="#ff7171"
      />
      <View style={styles.headingContainer}>
        <Image
          style={styles.profilePic}
          source={require("/Users/ninaloeterman/FluteClassProject/FluteClass/components/pics/tim-mossholder-vhsN1p7Cc_8-unsplash.jpg")}
        />
        <Text style={styles.studentName}>{name}</Text>
      </View>
      <View style={styles.repertioreContainer}>
        <Text style={styles.repTitle}>Repertiore</Text>
        <RepertioreItem />
      </View>
      <View>
        <Text style={styles.repTitle}>Comments</Text>
        <View style={styles.textAreaContainer}>
          <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            placeholder="Make a new comment"
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline={true}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#ebf4f8",
  },
  profilePic: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  repertioreContainer: {
    marginTop: 20,
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  studentName: {
    fontSize: 28,
    marginLeft: 20,
  },
  repTitle: {
    fontSize: 24,
    marginBottom: 20,
  },
  textAreaContainer: {
    borderColor: "grey",
    borderWidth: 1,
    padding: 5,
    width: vw(90),
    borderRadius: 10,
  },
  textArea: {
    height: 100,
    justifyContent: "flex-start",
  },
});

export default StudentProfile;
