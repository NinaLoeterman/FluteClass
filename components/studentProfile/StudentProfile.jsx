import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";


const StudentProfile = () => {
    return ( <View>
        <Image
            style={styles.profilePic}
            source={require("/Users/ninaloeterman/FluteClassProject/FluteClass/components/pics/tim-mossholder-vhsN1p7Cc_8-unsplash.jpg")}
          />
        <Text>Student Name</Text>
    </View> );
}
 
const styles = StyleSheet.create({
    profilePic: {
        height: 100,
        width: 100,
        borderRadius: 50,
    }
})

export default StudentProfile;