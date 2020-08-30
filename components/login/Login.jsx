import React from "react";
import * as firebase from "firebase";
import "firebase/auth";
import { Button } from "react-native";

var firebaseConfig = {
  apiKey: "AIzaSyBWQEmIV5axO0xDud1sfE_5C_lEb79xJno",
  authDomain: "hagarsfluteclass.firebaseapp.com",
  databaseURL: "https://hagarsfluteclass.firebaseio.com",
  projectId: "hagarsfluteclass",
  storageBucket: "hagarsfluteclass.appspot.com",
  messagingSenderId: "240014085758",
  appId: "1:240014085758:web:b7ba34c2f11b741163d22f",
  measurementId: "G-6M0HQJCFN9",
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// firebase.auth().onAuthStateChanged((user) => {
//     if (user != null) {
//       console.log("We are authenticated now!");
//     }

const Login = () => {
  return <>
  <Button title={'button'}/>
  </>;
};

export default Login;
