import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Login from './components/login/Login.jsx'
import {createSwitchNavigator} from 'react-navigation'
import EntryPage from './components/entryPage/EntryPage.jsx'
import StudentsPage from './components/studentsPage/StudentsPage.jsx'

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./components/pics/Play.png')}/>
      <Login />
      <StatusBar style="auto" />
    </View>
  );
}

const AppSwitchNavigator = createSwitchNavigator({
  EntryPage: EntryPage,
  Login: Login,
  StudentsPage: StudentsPage
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
