// screens/MapScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomMapView from '../components/MapView'; // Import the CustomMapView component

function MapScreen() {
  // Define an initial region for the map
  const initialRegion = {
    latitude: 12.9716, // Replace with your initial latitude
    longitude: 77.5946, // Replace with your initial longitude
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  // Define store markers with latitude, longitude, and title
  const storeMarkers = [
    {
      latitude: 12.9716, // Replace with store coordinates
      longitude: 77.5946, // Replace with store coordinates
      title: 'Store 1',
    },
    {
      latitude: 12.9723, // Replace with store coordinates
      longitude: 77.6098, // Replace with store coordinates
      title: 'Store 2',
    },
    // Add more store markers as needed
  ];

  return (
    <View style={styles.container}>
      {/* Include the CustomMapView component */}
      <CustomMapView initialRegion={initialRegion} markers={storeMarkers} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapScreen;
