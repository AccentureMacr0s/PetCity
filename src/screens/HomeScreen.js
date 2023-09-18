// HomeScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
//import MapView, { Marker } from 'react-native-maps'; // Import MapView and Marker from react-native-maps
import MenuBar from '../components/MenuBar';
import CustomMapView from '../components/MapView'; // Import the CustomMapView component
//import { GOOGLE_MAPS_API_KEY } from '../../secrets'; // Import your Google Maps API key

function HomeScreen({ navigation }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      <View style={styles.header}>
        <Text style={styles.title}>Pet Stores</Text>
        <TouchableOpacity onPress={toggleMenu}>
          <Text style={styles.menuIcon}>{isMenuOpen ? 'Close' : 'Menu'}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.storeList}>
        {/* Render your store listings here */}
        {/* ... (previous code) */}
      </ScrollView>
      {isMenuOpen && (
        <MenuBar
          onHomePress={() => navigation.navigate('Home')}
          onMapPress={() => navigation.navigate('Map')}
          onProfilePress={() => navigation.navigate('Profile')}
        />
      )}
      {/** Include the CustomMapView component */}
      <CustomMapView initialRegion={initialRegion} markers={storeMarkers} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  menuIcon: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  storeList: {
    flex: 1,
    padding: 10,
  },
  store: {
    backgroundColor: 'lightgray',
    padding: 10,
    marginBottom: 10,
  },
  map: {
    flex: 1,
  },
});

export default HomeScreen;
