import React from 'react';
import { View, TextInput, StyleSheet } from "react-native";
import { vw } from "react-native-expo-viewport-units";


const CommentPopup = () => {
    return ( <>
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
    </> );
}
 

const styles = StyleSheet.create({
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

})
export default CommentPopup;