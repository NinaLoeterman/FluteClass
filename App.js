import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Login from './components/login/Login.jsx'
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import EntryPage from './components/entryPage/EntryPage.jsx'
import StudentsPage from './components/studentsPage/StudentsPage.jsx'
import "react-native-gesture-handler";
import firebase from 'firebase'
import {firebaseConfig} from './components/login/config'

firebase.initializeApp(firebaseConfig);


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Image source={require('./components/pics/Play.png')}/> */}
      {/* <AppNavigator /> */}
      <StudentsPage />
      <StatusBar style="auto" />
    </View>
  );
}

const AppSwitchNavigator = createSwitchNavigator({
  EntryPage: EntryPage,
  Login: Login,
  StudentsPage: StudentsPage
})

const AppNavigator = createAppContainer(AppSwitchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebf4f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
