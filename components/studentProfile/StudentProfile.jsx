import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import RepertioreItem from "./repertioreItem/RepertioreItem";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CommentsPopup from "./CommentPopup/CommentPopup";

const StudentProfile = ({ route }) => {
  const [leaveComment, setLeaveComment] = useState(false);

  const navigation = useNavigation();

  const { name } = route.params;

  const commentsPopup = () => {
    setLeaveComment(true);
    //trigger leave a comment popup
  };

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
        <Text>Add a comment</Text>
        <Ionicons
          onPress={commentsPopup}
          name="md-add-circle"
          color="#0880ae"
          size={40}
        />
      </View>
      {leaveComment && <CommentsPopup />}
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
  
});

export default StudentProfile;
