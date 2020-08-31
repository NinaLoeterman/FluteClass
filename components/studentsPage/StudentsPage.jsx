import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Student from './student/student';

const StudentsPage = () => {
    return ( <View style={styles.container}><Text style={styles.title}>The Studio</Text>
    <Student />
    </View> );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50,
      backgroundColor: '#ebf4f8',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    }
  });
 
export default StudentsPage;