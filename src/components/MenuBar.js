// MenuBar.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function MenuBar({ onHomePress, onMapPress, onProfilePress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuItem} onPress={onHomePress}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={onMapPress}>
        <Text>Map</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={onProfilePress}>
        <Text>My Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    elevation: 5,
  },
  menuItem: {
    padding: 10,
  },
});

export default MenuBar;
