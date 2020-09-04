import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const RepertioreItem = () => {

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.composer}>Mozart</Text>
        <Text style={styles.nameOfPiece}>sinfonia concertante</Text>
      </View>
      <View style={styles.repInfo}>
        <View style={styles.timeInfo}>
          <Text style={styles.numWeeks}>2</Text>
          <Text>weeks</Text>
        </View>
        <MaterialCommunityIcons name="theater" size={36} color="grey" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5,
    shadowColor: "rgb(44, 39, 56)",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.04,
    shadowRadius: 3.84,
    elevation: 5,
  },
  repInfo: {
      flexDirection: 'row',
      width: 90,
      justifyContent: 'space-between',
      paddingRight: 10,
      alignItems: 'center',
  },
  timeInfo: {
      justifyContent: 'center',
      alignItems: 'center',
  },
  numWeeks: {
    fontSize: 24,
  },
  composer: {
    fontSize: 24,
  }
});
export default RepertioreItem;
