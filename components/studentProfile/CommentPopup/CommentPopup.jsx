import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { vh, vw } from "react-native-expo-viewport-units";

const CommentPopup = ({ toggleModal }) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
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
            <TouchableHighlight
              style={{ ...styles.openButton }}
              onPress={toggleModal}
            >
              <Ionicons name="md-close" size={40} />
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textAreaContainer: {
    borderColor: "grey",
    borderWidth: 1,
    padding: 5,
    width: vw(60),
    borderRadius: 10,
  },
  textArea: {
    height: 100,
    justifyContent: "flex-start",
  },
});

export default CommentPopup;
