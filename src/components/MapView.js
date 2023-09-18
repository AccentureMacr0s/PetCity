// components/MapView.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { GOOGLE_MAPS_API_KEY } from '../../secrets'; // Import your Google Maps API key

function CustomMapView({ initialRegion, markers }) {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        provider="google"
        mapType="standard"
        apiKey={GOOGLE_MAPS_API_KEY}
      >
        {/* Render markers for stores on the map */}
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            title={marker.title}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default CustomMapView;
